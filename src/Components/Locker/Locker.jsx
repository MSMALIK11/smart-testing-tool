import React,{memo} from 'react'
import './Locker.css'
// import { useMutation } from "react-query";


function Locker({ props,lockerItem }) {

//  console.log('locker component')

    return (
      <>
                <div className="lockerStatusWraper">
                  <div
                    onClick={() =>
                      props.openLocker({
                        lockerno: props.locker.lockerno,
                        position: props.locker.position,
                      })
                    }
                    data-testid="locker"
                    className={lockerItem?.open ? "status lockopen" : "status"}
                  >
                    <span id="lockernumber">{lockerItem?.lockerno}</span>
                    <span>{lockerItem?.open ? "open" : "close|Empty"}</span>
                  </div>
                </div>
        
      </>
    );
}

export default memo(Locker);