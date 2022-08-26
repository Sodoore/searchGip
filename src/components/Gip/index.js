import axios from "axios";
import React, {useEffect, useState} from "react";
import {Search} from "../Seach";
import "./style.css";

export const GetGip = () =>{
    const [data, setdata] = useState([])
    const getGip = async () =>{
        const result = await axios("https://api.giphy.com/v1/gifs/search?api_key=sfJoNIbYEOS4pmyNpQe5lT4FkLd6xmAg&q=${input}&limit=30");
        console.log(result.data.data)
        setdata(result.data.data);

      }
      useEffect(() => {
        getGip();
      }, []);
    
    return(
        <div>
            <Search/>
                <div className="gip">
                {data.map(el =>  
                <img className="sodGip" src={el.images.original.url} alt="Gip" />
                    )} 
                </div>
        </div>
    )
}
