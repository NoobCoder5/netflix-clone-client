import React, { useEffect, useState } from "react";
import axios from "axios";
import "./video.css";
import Nav from "./Nav.js";
import ReactPlayer from "react-player";
import { useParams } from "react-router";
const Video = () => {
  const { title } = useParams();
  const { id } = useParams();
  // console.log(id,title);
  const [sample, setsample] = useState([]);
  const [data, setdata] = useState({});
  const [vid, setvid] = useState([])
  
  useEffect(() => {
    async function fetch() {
      const details = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a27a475ae0f6880353164fc4b924a34a&language=en-US`
        );
        setdata(details.data);
        const oto = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a27a475ae0f6880353164fc4b924a34a&append_to_response=videos`);
        setvid(oto.data.results);
       
    }

    fetch();
    
  }, []);
  // console.log(data);
  function short() {
    const str = data?.overview || "";
    const rest = "....";
    const ll = str.slice(0, 185);
    return ll.concat(rest);
  }
   

  return (
    <>
      <Nav />
      <div
        class="section"
        style={{
          backgroundImage: `url("https://www.themoviedb.org/t/p/w780${data?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="content">
          <img
            src="https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUjRFN4Hg4oWXlsuNaaQpHimRbr54CH6aoecdexRxcQqhRKnOcfHjXw4vmD8wE02NJ2dDQ1VuMeJGqlcaKIWBElfaML1-KeL7qjKUVmgsJjV2SZCV3uNUaQHfl-EkCJSaReCglwcddsKrrUq00KUmF7GZK_2GWEhZ4VCklW3Txh9ZQ.png?r=0e9"
            alt=""
          />
          <h2 className="title">{data?.title}</h2>
          <h4 className="story">{short()}</h4>
        </div>
      </div>

    <div className="contain">
      <h1>VIDEOS</h1>
     <div className="videos">

      {vid.map((e) => {
        return <ReactPlayer className="hello"  key={e.id} width="400px" height="250px" url={`https://www.youtube.com/watch?v=${e.key}`}></ReactPlayer>
      })}
     </div>
    </div>


    </>
  );
};

export default Video;
