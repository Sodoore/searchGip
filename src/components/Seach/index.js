import React, { useState } from "react";
import "./style.css"


export const Search = () => {
    const [state, setState] = useState(0)

    const set = (e) =>{
        setState(e.target.value)
        console.log(state)
    }

    return (
        
        <div className="searchCont">
            <input className="SearchIn" type="search" onChange={set}/>
             <button className="SearchBtn">SEARCH</button>
        </div>
       
        
    )
}