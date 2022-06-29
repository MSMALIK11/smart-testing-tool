
import "./Home.css";
import Menu from './Menu';
import Locker from './Locker';
import { useQuery } from "react-query";

import { useRef, useState, useEffect } from "react";

export let totalLocker;

let temparr = ["44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44"]; // Only testing purpose.


function Home() {

    const ele = useRef(null);
    useEffect(() => {
        const domscroll = ele.current
        if (domscroll) {
            domscroll.scrollTop = domscroll.scrollHeight;
        }
    });
    let lockerInfo = [];
    totalLocker = lockerInfo;

    const [locker, setLocker] = useState("L");

    function toggleLocker(id) {
        setLocker(id);
    }

    const { isLoading, isError, isSuccess, data } = useQuery("locker Status", async () => {
        return fetch("http://localhost:3000/locker_status").then(res => res.json())
    });

    if (isLoading) {
        return <h3 className="loader" data-testid="loading">Wait someTime</h3>
    }
    if (isError) {
        return <h3 className="loader" data-testid="error">SomeThing Went Wrong</h3>
    }
    if (isSuccess) {
        data?.lockerStatus.forEach((lockerid) => {
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
        data?.openLocker.forEach((lockerid) => {
            const l = lockerid.split("")[0]
            const lno = lockerid.match(/\d/g).join("");
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
    // console.log("LeftLocker", leftLock);
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
            <Menu props={{ toggleLocker }} />
            <div className="statusContainer">
                <div className="port-status">
                    {
                        // lockopen // time complixcty o(n)
                        locker === "L" ? (
                            leftLocker?.map((locker, index) => {
                                return (
                                    <Locker key={index} props={locker} />
                                )
                            })
                        )
                            :
                            (
                                rightLocker?.map((locker, index) => {
                                    return (
                                        <Locker key={index} props={locker} />
                                    )
                                })
                            )
                    }
                </div>
            </div>

            <div className="logs">
                <div id="ele" ref={ele} className="log">
                    <p>logs for working</p>
                    <p>logs for working</p>

                    {
                        temparr.map((e, i) => {
                            return <p key={i} id="log">hello world</p>
                        })
                    }
                </div>

            </div>
        </div>

    )
}

export default Home