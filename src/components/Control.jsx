import React,{useState} from 'react'
import Display from './Display'
import dataArr from '../data.js'
import Toolbar from './Toolbar'
import Hiding from './Hiding'

const Control = ()=>{
    const [data, setData] = useState(dataArr)
    const [currIndex, setIndex] = useState(0)
    const [isHidden, setHidden] = useState(true)
    const [isEditing, setEditing]= useState(true);

    const utilities = {
        decreaseIndex: ()=>{
            if(currIndex ===0) setIndex(data.length -1)
            else setIndex(currIndex-1);
            
            
        },
        increaseIndex : ()=>{
            if(currIndex===data.length-1) setIndex(0);
            else setIndex(currIndex +1)
            //The first button never works
            
        },
        deleteIndex : ()=>{
            if(data.length === 0) return
            else{
                let temp = [...data];
                temp.splice(currIndex,1)
                setData(temp)

            }
        },
        openForm : (isNew)=>{
            //Set form condition
            if(isNew) setEditing(false)
            else setEditing(true);
            //Make object
            setHidden(false)
            
        },
        closeForm : ()=>{
            setHidden(true);
        },
        setNew: ()=>{
            setEditing(false)
        },

    }
    
    return(
        <div>
            <Display data={data} index={currIndex}></Display>
            <Toolbar utilities={utilities} arr={[setEditing, utilities.setNew]} />
            <Hiding hidden={isHidden} editing ={isEditing} data={data} currIndex = {currIndex} closeFn={utilities.closeForm}></Hiding>
        </div>
    )

}

export default Control;