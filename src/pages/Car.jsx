import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import CarCard from "../layouts/CarCard";
import Footer from "../layouts/Footer";
const Car=()=>{
 return (
    <>
    <Navbar/>
    <CarCard/>
    <Footer/>
    This is a Car page 
    <h1 className="text-3xl text-red-600 font-bold underline">
      Hello world!
    </h1>
    <br />
    {/* <Link to='/cycle'>Cycle</Link> */}
    </>
 )
}
export default Car;