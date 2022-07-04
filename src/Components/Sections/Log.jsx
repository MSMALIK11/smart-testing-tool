import React from "react"


function Log({ props }) {
    console.log(props);
    return (
        <p>{props}  </p>
    )
}

export const LogMemo = React.memo(Log)




// {
//     log?.map((log, index) => {
//         return <p key={index}>{log}</p>
//     })
// }