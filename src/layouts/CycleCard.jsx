
import React from "react";
import "../assets/css/Card.css"
import Cycle1 from "../assets/images/cycle1.webp"
import Cycle2 from "../assets/images/cycle2.webp"
import Cycle3 from "../assets/images/cycle3.webp"
import Cycle4 from "../assets/images/cycle4.png"
import Cycle5 from "../assets/images/cycle5.jpg"
import Cycle6 from "../assets/images/cycle6.jpg"
import Cycle7 from "../assets/images/cycle7.webp"
import Cycle8 from "../assets/images/cycle8.jpg"
import Cycle9 from "../assets/images//cycle9.jpg"
import Cycle10 from "../assets/images/cycle10.webp"
const CycleCard=()=>{
    return(
        <div>
            <div className="card-container">
            <div className="card">
                    <img className="image-car" src={Cycle1} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>                         
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Cycle2} alt="" />
                    <div className="card-content">
                            <h3>Audi A6</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Cycle3} alt="" />
                    <div className="card-content">
                            <h3>Audi R8</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Cycle4} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>
                
                <div className="card">
                    <img className="image-car" src={Cycle5} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                 <div className="card">
                    <img className="image-car" src={Cycle6} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>                         
                            <button className="button">Buy Now</button>
                    </div>
                </div>
 
                <div className="card">
                    <img className="image-car" src={Cycle7} alt="" />
                    <div className="card-content">
                            <h3>Audi A6</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div> 

                <div className="card">
                    <img className="image-car" src={Cycle8} alt="" />
                    <div className="card-content">
                            <h3>Audi R8</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Cycle9} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Cycle10} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

            </div> 
            {/* <p><b>I LOVE CAR</b></p> */}
        </div>
    )
}
export default CycleCard;