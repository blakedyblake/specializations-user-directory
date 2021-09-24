import React from 'react'

const New = ({fn,setFn})=>{
    const openClass = ()=>{
        fn();
        setFn();
    }
    return <div className = 'button' onClick={openClass}>New</div>
}

export default New;