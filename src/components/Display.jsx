import React from "react";

const Display = ({index,data})=>{
    const current = data[index];
    console.log(index);
    return(
        
        <section>
            <h1 id='name'>{current.name.first} {current.name.last}</h1>
            <p><b>From: </b>{current.city}, {current.country}</p>
            <p><b>Job Title: </b>{current.title}</p>
            <p><b>Employer: </b>{current.employer}</p>
            <p><b>Favorite Movies:</b></p>
            <ol>
                <li>{current.favoriteMovies[0]}</li>
                <li>{current.favoriteMovies[1]}</li>
                <li>{current.favoriteMovies[2]}</li>
            </ol>
            <h2>{index+1}/{data.length}</h2>

        </section>
    )
}

export default Display;