import React, { useState } from "react";

const Hiding = ({hidden,data,closeFn,currIndex,editing})=>{
    const current = data[currIndex];
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    const [job,setJob] =useState('')
    const [boss,setBoss] = useState('')
    const [city, setCity] =useState('')
    const [country, setCountry] =useState('')

    const [fav1, setFav1]= useState('')
    const [fav2, setFav2]= useState('')
    const [fav3, setFav3]= useState('')

    const handleSubmit = (isEditing)=>{

        const newObj ={
            name: {
                first: firstName,

            }
        }
    }

    console.log(current)
    return !editing ? (
        <section hidden={hidden}>
            <span id='exit' onClick={closeFn} >X</span>
            <br/><label >Fist Name:</label> <input onChange={e=>setFirstName(e.target.value)} value={editing ? current.first :""}/> 
            
            <label>Last Name:</label><input type="text" onChange={e=>setLastName(e.target.value)}/><br/>
            
            <label>City:</label><input onChange={e=>setCity(e.target.value)}/> 
            <label>Country</label><input onChange={e=>setCountry(e.target.value)}/><br/>

            <label >Job:</label><input onChange={e=>setJob(e.target.value)}/><br/>
            <label>Employer:</label><input type="text" onChange={e=>setBoss(e.target.value)} /><br/><br/>


            <label>Favorite Movies</label><br/><br/>
            <label>1:</label><input type="text" onChange={e=>setFav1(e.target.value)}/><br/>
            <label>2:</label><input type="text" onChange={e=>setFav2(e.target.value)}/><br/>
            <label>3:</label><input type="text" onChange={e=>setFav3(e.target.value)}/><br/>

            <div className='button'>Submit</div>
        </section>
    ) 
    :
    (
        <section hidden={hidden}>
            <span id='exit' onClick={closeFn}>X</span>
        </section>
    )
}
export default Hiding;