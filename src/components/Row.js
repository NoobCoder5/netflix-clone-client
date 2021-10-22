
import React, { useEffect, useState ,createContext } from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from "react-router-dom";

import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
 



const Row = ({lg,title,url}) => {
  const vid = createContext()
    const [state, setstate] = useState([]);
     const [id, setid] = useState([])
    useEffect(() => {
      async function fetch() {
        const data = await axios.get(url);
        setstate(data.data.results)
      }
      fetch();
    }, [url]);
   async function yt(ide){
     const id = await axios.get(`https://api.themoviedb.org/3/movie/${ide}/videos?api_key=a27a475ae0f6880353164fc4b924a34a&language=en-US`)
     setid(id.data.results)
   }
  // console.log(id);
  window.localStorage.setItem(`${title}`,JSON.stringify(state))
  const rj =  JSON.parse(window.localStorage.getItem(`${title}`));
 
    return (
        <>
          <div className="row">
              <h2>{title}</h2>
              <div className="posters">
                  {
                      rj?.map((e) => {
                         
                        return  <Link to={`/video/${title}/${e.id}`}>
                           <LazyLoadImage key={e.id} effect="opacity" onClick={() => {
                             yt(e.id)
                             
                            }} className={`poster ${lg && "large"}`} src={`https://image.tmdb.org/t/p/original${e?.poster_path}`} alt={e?.name} />
                            </Link>
                     

                      })
                  }
              </div>
          </div>
        </>
    )
}

export default Row
