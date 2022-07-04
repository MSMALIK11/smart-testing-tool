import React from 'react'
import "./Home.css";
// import { useMutation } from "react-query";


function Locker({ props }) {


    return (
        <>
            <div onClick={() => props.openLocker({ lockerno: props.locker.lockerno, position: props.locker.position })} data-testid="locker" className={props?.locker.open ? "status lockopen" : "status"}>
                <p id='lockernumber'>{props?.locker.lockerno}</p>
                <p>{props.locker?.open ? "open" : "close|Empty"}</p>
            </div>

        </>

    )
}

export default Locker