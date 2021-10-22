import React from "react";
import Row from "./Row.js"
import Banner from "./Banner.js"
import Nav from "./Nav.js"
import {Request} from "../Request.js"
const Default = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Row lg={true} title="Trending" url={Request.trending} />
      <Row lg={false} title="Top Rated" url={Request.top_rated} />
      <Row lg={false} title="Action Movies" url={Request.action} />
      <Row lg={false} title="Fiction Movies" url={Request.fiction} />
      <Row lg={false} title="Adventure Movies" url={Request.adventure} />
      <Row lg={false} title="Mystery Movies" url={Request.mystery} />
    </>
  );
};

export default Default;
