import React from "react";

const Edit = ({fn,setFn})=>{
    const openClass = ()=>{
        fn();
        setFn();
    }
    return <div className = 'button' onClick={openClass}>Edit</div>
}
export default Edit;