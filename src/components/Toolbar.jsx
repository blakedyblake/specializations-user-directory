import React from "react";
import Last from "./buttons/Last";
import First from "./buttons/Next";
import Delete from "./buttons/Delete";
import New from "./buttons/New";
import Edit from "./buttons/Edit";

const Toolbar = ({utilities,arr})=>{
    const {decreaseIndex, increaseIndex,deleteIndex,openForm} = utilities
    const [setNew, setEditing] =arr;
    return(
        <div id = 'toolbar'>
            <Last fn={decreaseIndex}/>
            <div id='center'>
                <Edit fn={openForm} setFn={setEditing}></Edit>
                <Delete fn = {deleteIndex}></Delete>
                <New fn = {openForm} setFn={setNew}/>
            </div>
            <First fn={increaseIndex}/>
        </div>
    )
}
export default Toolbar