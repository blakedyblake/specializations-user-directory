import React from "react";

const First = ({fn})=>{
    return(
        <div id='first' className='backless' onClick={fn}>{"Next >"}</div>
    )
}
export default First