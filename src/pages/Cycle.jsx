import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import CycleCard from "../layouts/CycleCard";
const Cycle=()=>{
  return (
    <div>
      <Navbar/>
      <CycleCard/>
      <Footer/>
      {/* This is a Cycle page
      <br />
      <Link to ='/'>Car</Link> */}
    </div>
  )
}
export default Cycle;