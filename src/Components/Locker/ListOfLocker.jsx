import React from 'react';
import Locker from './Locker';

const ListOfLocker = ({props,leftLocker,rightLocker}) => {
  console.log('listOfLocker')
 return (
   <>
     <div className="statusContainer">
       <div className="port-status">
         {props.locker === "L"
           ? leftLocker?.map((lockerItem,index) => (
               <Locker props={props} lockerItem={lockerItem} key={index} />
             ))
           : rightLocker?.map((lockerItem,index) => (
               <Locker props={props} lockerItem={lockerItem} key={index} />
             ))}
       </div>
     </div>
   </>
 );
}

export default React.memo(ListOfLocker)