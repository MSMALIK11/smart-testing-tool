import "../Home.css";
import Menu from "../Menu/Menu";
import Locker from "../Locker/Locker";
import { useQuery, useMutation, useQueryClient } from "react-query";

import { useRef, useState, useEffect, useCallback } from "react";

import TopMenu from "../TopHomeMenu/TopMenu";
import Loading from "../common/Loading";
import Logs from "../Logs/Logs";
import ListOfLocker from "../Locker/ListOfLocker";

export let totalLocker;

function Home() {
  const queryClient = useQueryClient();
  const ele = useRef(null);

  const [log, setLog] = useState([]);
  // let log;
const log2=[];
  useEffect(() => {
    const domscroll = ele.current;
    if (domscroll) {
      domscroll.scrollTop = domscroll.scrollHeight;
    }
  }, [log]);

  useEffect(() => {
   
    console.log('use effect run ')
   getReaclTimeEvent()
       // return () => {
    //   sse.close();
    // };
  }, []);
  const getReaclTimeEvent=()=>{
 let sse = new EventSource("http://localhost:4000/events");

 sse.onopen = (e) => {
   console.log("The connection has been established.");
 };
//  sse.onmessage = (e) => console.log("e", e); /not working
 sse.addEventListener("flightLanding", ({ data }) => {
  // console.log('data',data)
   setLog([...log, data]);

  })}

  let lockerInfo = [];

  totalLocker = lockerInfo;  // only for testing purpose.

  const [locker, setLocker] = useState("L");

  const mutation = useMutation(
    ({ lockerno, position }) => {
      const posiitonId = position === "L" ? 0 : 1;
      return fetch(
        `http://localhost:9080/api/v1/relaylocker/openlocker/${lockerno}?side=${posiitonId}`,
        {
          method: "POST",
        }
      );
    },
    {
      onSuccess: async (data, variables, context) => {
        console.log(await data.json());
        queryClient.invalidateQueries("lockerStatus");
      },
      onError: (error, variables, context) => {},
    }
  );
 

  // localhost:9080/api/v1/relaylocker/openlocker/1?side=0
  // function openLocker({ lockerno, position }) {
    // mutation.mutate({ lockerno, position })
    // setLog((prev) => {
    //   return [...prev, lockerno];
    // });
  // }

  // const toggleLocker = (e) => {
  //   setLocker(e.target.value);
  // };
  const openLocker=useCallback(()=>{
    function openLocker({ lockerno, position }) {
      // mutation.mutate({ lockerno, position })
      // setLog((prev) => {
      //   return [...prev, lockerno];
      // });
    }

},[locker])

const toggleLocker=useCallback((e)=>{
setLocker(e.target.value);
},[locker])

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

  // event.onopen = () => {
  //     console.log("Connection is SuccessFull.");
  //     event.onmessage = (e) => {
  //         const { data } = e;
  //         console.log(data);
  //         if (!data.relayEventType || data.relayEventType) {
  //             queryClient.invalidateQueries('lockerStatus');
  //             log = "hello";
  //             setLog((priviousValue) => {
  //                 return [data]
  //             });
  //             console.log(data);
  //         }

  //     }
  // }

  // event.onerror = function err(e) {
  //     console.log("coudnot connect server.");
  //     return false;
  // }

  if (isLoading) {
    return <Loading title="Wait someTime" dataTestId="loading" />;
  }
  if (isError) {
    return <Loading title="SomeThing Went Wrong" dataTestId="error" />;
  }
  if (isSuccess) {
    const { locker_status } = data?._data;
    locker_status?.closed_lockers?.forEach((lockerid) => {
      const l = lockerid.split("")[0];
      const lno = lockerid.match(/\d/g).join("");
      lockerInfo.push({
        lockerno: parseInt(lno),
        open: false,
        empty: true,
        position: l,
      });
    });

    // Check the locker is open or not. if open then push the data into a locker info.
    locker_status?.opened_lockers.forEach((lockerid) => {
      const l = lockerid.split("")[0];
      const lno = lockerid.match(/\d/g).join("");
      // console.log(lno)
      lockerInfo.push({
        lockerno: parseInt(lno),
        open: true,
        empty: true,
        position: l,
      });
    });
    // Time Compexty  => O log n + O log n => o n  //
    // lockerInfo.sort((a, b) => a.lockerno > b.lockerno ? -1 : 1).sort((a, b) => a.position === "L" ? -1 : 1);
  }
  // Time Complexty => filter o(n) + o(log n ) = O n (log n)
  const leftLocker = lockerInfo
    .filter((locker, index) => {
      return locker.position === "L" ? true : false;
    })
    .sort((a, b) => {
      return a.lockerno < b.lockerno ? -1 : 1;
    });
  const rightLocker = lockerInfo
    .filter((locker, index) => {
      return locker.position === "R" ? true : false;
    })
    .sort((a, b) => {
      return a.lockerno < b.lockerno ? -1 : 1;
    });

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

      {/* <div className="statusContainer">
        <div className="port-status"> */}
          <ListOfLocker props={{ locker, openLocker }} leftLocker={leftLocker} rightLocker={rightLocker} />
          {/* {
            // lockopen // time complixcty o(n)
            locker === "L"
              ? leftLocker?.map((locker, index) => {
                  return <Locker key={index} props={{ locker, openLocker }} />;
                })
              : rightLocker?.map((locker, index) => {
                  return <Locker key={index} props={{ locker, openLocker }} />;
                })
          } */}
        {/* </div>
      </div> */}

      <Logs log={log} />
    </div>
  );
}

export default Home;
