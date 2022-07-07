import React from 'react'
import './Locker.css'
// import { useMutation } from "react-query";


function Locker({ props }) {


    return (
        <div className='lockerStatusWraper'>
            <div onClick={() => props.openLocker({ lockerno: props.locker.lockerno, position: props.locker.position })} data-testid="locker" className={props?.locker.open ? "status lockopen" : "status"}>
                <span id='lockernumber'>{props?.locker.lockerno}</span>
                <span>{props.locker?.open ? "open" : "close|Empty"}</span>
            </div>

        </div>

    )
}

export default Locker;