
// import React, { useEffect, useState } from 'react'
import "./Home.css";
import Menu from './Menu';
import Locker from './Locker';
import { useQuery } from "react-query";

import { useState } from "react";

function Home() {

    let lockerInfo = [];
    const [locker, setLocker] = useState("L");

    function toggleLocker(id) {
        setLocker(id);
    }

    const { isLoading, isError, isSuccess, data } = useQuery("locker Status", async () => {
        return fetch("http://localhost:3000/locker_status").then(res => res.json())
    });

    console.log(data?.openLocker);


    if (isLoading) {
        return <h3>Wait someTime</h3>
    }
    if (isError) {
        return <h3>SomeThing Went Wrong. </h3>
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
            })
        });
        // Time Compexty  => O log n + O log n => o n
        lockerInfo.sort((a, b) => a.lockerno > b.lockerno ? -1 : 1).sort((a, b) => a.position === "L" ? -1 : 1);
    }
    // o(1) time complxcty.
    let leftLocker = lockerInfo.slice(0, 152);
    let rightLocker = lockerInfo.slice(152);

    // O log N      
    rightLocker.sort((a, b) => {
        if (a.lockerno < b.lockerno) {
            return -1;
        }
        return 1;
    });

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
                <div className="log">
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                    <p>logs for working</p>
                </div>

            </div>
        </div>

    )
}

export default Home