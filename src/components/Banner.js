import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Request } from "../Request.js";
const Banner = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    async function fetch() {
      const data = await axios.get(Request.originals);
      setstate(data.data.results[Math.floor(Math.random() * data.data.results.length)]);
    }
    fetch();
  }, []);
  // console.log(state);
  window.localStorage.setItem("bannner",JSON.stringify(state))
  const rj =  JSON.parse(window.localStorage.getItem(state));
  console.log(rj);
 function short(){
   const str = state?.overview || ""
   const rest = "...."
   const ll = str.slice(0,185)
   return ll.concat(rest)
 }
  return (
    <>
      <div
        className="container"
        key={`${state.id}`}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          objectFit:"cover",
          backgroundImage:`url("https://image.tmdb.org/t/p/original${state?.backdrop_path}")`
        }}
        
      >
        <div className="content">
          <h1>{state.name}</h1>
         <span> <button className="btn ">Playdddfsf</button>
          <button className="btn ">Info</button></span>
         <p className="desc">{short()}</p>
        </div>
        
      </div>
    </>
  );
};

export default Banner;
