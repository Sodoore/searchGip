import React, { useState, useRef } from "react";
import "./style.css"
import {GetGip} from "../Gip"


export const Search = () => {
const inputElement = useRef();
    const searching = (e) =>{
        inputElement.current.focus();
        console.log(e.target.value)
    }
    // const find = () => state

    return (
        
        <div>

            <div className="searchCont">
                <input className="SearchIn" type="search" placeholder="Please search GIP" ref={inputElement}/>
                <button className="SearchBtn" searching={searching}>SEARCH</button>
             </div>
             <GetGip/>
        </div>
       
        
    )
}