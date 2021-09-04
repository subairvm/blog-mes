import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import business from "./images/pp.jpeg";
const Home = () => {
  return (
    <>
    <div style={{padding: "275px"}}>
    <Common name="" 
     imgsrc={business} visit="/service" 
     btname="Get Started"/>
     </div>
    </>
  );
};

export default Home;
