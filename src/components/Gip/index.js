import axios from "axios";
import React, {useEffect, useState} from "react";
import "./style.css";

export const GetGip = () =>{
    const [data, setdata] = useState([])
    const getGip = async () =>{
        const result = await axios(`https://api.giphy.com/v1/gifs/search?api_key=sfJoNIbYEOS4pmyNpQe5lT4FkLd6xmAg&q=${"input"}&limit=30`);
        setdata(result.data.data)
      }
      useEffect(() => {
        getGip();
      }, []);

    return(
        <div>
                <div className="gip">
                {data.map(el =>  
                <img className="sodGip" src={el.images.original.url} alt="Gip" />
                    )} 
                </div>
        </div>
    )
}
