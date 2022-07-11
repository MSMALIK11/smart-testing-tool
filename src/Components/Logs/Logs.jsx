import React, { useEffect,useRef } from 'react';
import './Logs.css';
const Logs = ({log}) => {
 
const ele=useRef(null)
 useEffect(() => {
   const domscroll = ele.current;
   if (domscroll) {
     domscroll.scrollTop = domscroll.scrollHeight;
   }
 }, [log]);

console.log('log component')

  return (
    <div className="logs">
       
      <div  className="log" ref={ele}>
      {/* {
        log?.map((item,index)=>{
            return(
                <p key={index}>{item}</p>
            )
        })
      } */}
       
       
      
       
       
      </div>
    </div>
  );
}

export default  React.memo(Logs)