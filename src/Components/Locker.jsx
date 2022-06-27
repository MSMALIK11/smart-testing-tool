import React from 'react'
import "./Home.css";

function Locker({ props }) {

    return (
        <>
            <div className={props.open ? "status lockopen" : "status"}>
                <p id='lockernumber'>{props.lockerno}</p>
                <p>{props.open ? "open" : "close|Empty"}</p>
            </div>

        </>

    )
}

export default Locker