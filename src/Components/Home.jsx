
import "./Home.css";
import Menu from './Menu';
import Locker from './Locker';
import { useQuery, useMutation, useQueryClient } from "react-query";

import { useRef, useState, useEffect } from "react";
import { LogMemo } from "./Sections/Log";
import TopMenu from "./TopHomeMenu/TopMenu";

export let totalLocker;

let ssecall = 0;


// Sse Event Function.
let e;
const sse = () => {
    if (!ssecall) {
        ssecall++
        return e = new EventSource('http://localhost:9080/api/v1/relaylocker/sse/getlockerevents')
    }
    return e;
}




function Home() {

    const event = sse()

    const queryClient = useQueryClient();
    const ele = useRef(null);

const [dValue,setdValue]=useState('');
    const [log, setLog] = useState();
    // let log;


    useEffect(() => {
        const domscroll = ele.current
        if (domscroll) {
            domscroll.scrollTop = domscroll.scrollHeight;
            domscroll.innerHTML = `<p>${log}</p>`
        }
       
    }, [log]);

    
    // useEffect(() => {
    //     setLog((priviousValue) => {
    //         return [...priviousValue, "data"]
    //     });
    // }, []);

    let lockerInfo = [];

    totalLocker = lockerInfo; // only for testing purpose.

    const [locker, setLocker] = useState("L");


    const mutation = useMutation(({ lockerno, position }) => {
        const posiitonId = position === "L" ? 0 : 1
        return fetch(`http://localhost:9080/api/v1/relaylocker/openlocker/${lockerno}?side=${posiitonId}`, {
            method: "POST"
        })
    }, {
        onSuccess: async (data, variables, context) => {
            console.log(await data.json());
            queryClient.invalidateQueries('lockerStatus');
        },
        onError: (error, variables, context) => {

        }
    })

    // localhost:9080/api/v1/relaylocker/openlocker/1?side=0
    function openLocker({ lockerno, position }) {
        mutation.mutate({ lockerno, position })
    }

    const toggleLocker=(e)=>{
    
      alert(e.target.value)
      setdValue(e.target.value)
  setLocker(e.target.value);
    }
   

    // const { isLoading, isError, isSuccess, data } = useQuery("lockerStatus", async () => {
    //     return fetch("http://localhost:9080/api/v1/relaylocker/lockerstatus").then(res => res.json())
    // });

     const { isLoading, isError, isSuccess, data, error } = useQuery(
       "lockerStatus",
       async () => {
         return fetch("http://localhost:3000/locker_status").then((res) =>
           res.json()
         );
       }
     );





    // Server Side Event Code.

    event.onopen = () => {
        console.log("Connection is SuccessFull.");
        event.onmessage = (e) => {
            const { data } = e;
            console.log(data);
            if (!data.relayEventType || data.relayEventType) {
                queryClient.invalidateQueries('lockerStatus');
                log = "hello";
                setLog((priviousValue) => {
                    return [data]
                });
                console.log(data);
            }

        }
    }

    event.onerror = function err(e) {
        console.log("coudnot connect server.");
        return false;
    }
    // if (event.readyState === 1) {


    // console.log(event.readyState);







    // Server Side Evnet Code.





    if (isLoading) {
        return <h3 className="loader" data-testid="loading">Wait someTime</h3>
    }
    if (isError) {
        return <h3 className="loader" data-testid="error">SomeThing Went Wrong</h3>
    }
    if (isSuccess) {
        const { locker_status } = data?._data;
        locker_status?.closed_lockers?.forEach((lockerid) => {
            const l = lockerid.split("")[0]
            const lno = lockerid.match(/\d/g).join("");
            lockerInfo.push({
                lockerno: parseInt(lno),
                open: false,
                empty: true,
                position: l
            });
        });

        // Check the locker is open or not. if open then push the data into a locker info.
        locker_status?.opened_lockers.forEach((lockerid) => {
            const l = lockerid.split("")[0]
            const lno = lockerid.match(/\d/g).join("");
            console.log(lno)
            lockerInfo.push({
                lockerno: parseInt(lno),
                open: true,
                empty: true,
                position: l
            });
        });
        // Time Compexty  => O log n + O log n => o n  // 
        // lockerInfo.sort((a, b) => a.lockerno > b.lockerno ? -1 : 1).sort((a, b) => a.position === "L" ? -1 : 1);
    }
    // Time Complexty => filter o(n) + o(log n ) = O n (log n)
    const leftLocker = lockerInfo.filter((locker, index) => {
        return locker.position === "L" ? true : false;
    }).sort((a, b) => {
        return a.lockerno < b.lockerno ? -1 : 1
    });
    const rightLocker = lockerInfo.filter((locker, index) => {
        return locker.position === "R" ? true : false;
    }).sort((a, b) => {
        return a.lockerno < b.lockerno ? -1 : 1
    });;
    
    // console.log("RightLock", rightLock);
    // o(1) time complxcty.
    // let leftLocker = lockerInfo.slice(0, 152);
    // let rightLocker = lockerInfo.slice(152);

    // O log N      
    // rightLocker.sort((a, b) => {
    //     if (a.lockerno < b.lockerno) {
    //         return -1;
    //     }
    //     return 1;
    // });
   

    return (
      <div className="container">
        <TopMenu />

        <Menu toggleLocker={toggleLocker} />
        <div className="statusContainer">
          <div className="port-status">
            {
              // lockopen // time complixcty o(n)
              locker === "L"
                ? leftLocker?.map((locker, index) => {
                    return (
                      <Locker key={index} props={{ locker, openLocker }} />
                    );
                  })
                : rightLocker?.map((locker, index) => {
                    return (
                      <Locker key={index} props={{ locker, openLocker }} />
                    );
                  })
            }
          </div>
        </div>

        <div className="logs">
          <div id="ele" ref={ele} className="log">
            {
              // log.map((d, i) => {
              //     return <LogMemo key={i} props={d} />
              // })
            }

            {
              // log?.map((log, index) => {
              //     return <p key={index}>{log}</p>
              // })
            }
          </div>
        </div>
      </div>
    );
}

export default Home