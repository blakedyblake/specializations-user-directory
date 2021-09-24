import React from "react";

const Last = ({fn})=>{
    return(
        <div id='last' className='backless' onClick={fn}>{"< Previous"}</div>
    )
}
export default Last