import React from 'react'
import "./Home.css";
import { useMutation } from "react-query";

export let locker;

function Locker({ props }) {

    const mutation = useMutation(({ lockerno, position }) => {
        const posiitonId = position === "L" ? 0 : 1
        return fetch(`http://192.168.1.132:9080/api/v1/relaylocker/openlocker/${lockerno}?side=${posiitonId}`)
    })
    function openLocker({ lockerno, position }) {
        mutation.mutate({ lockerno, position })
        locker = lockerno;
    }

    return (
        <>
            <div onClick={() => openLocker({ lockerno: props.lockerno, position: props.position })} data-testid="locker" className={props.open ? "status lockopen" : "status"}>
                <p id='lockernumber'>{props.lockerno}</p>
                <p>{props.open ? "open" : "close|Empty"}</p>
            </div>

        </>

    )
}

export default Locker