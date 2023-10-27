
import React from "react";
import "../assets/css/Card.css"
import Bike1 from "../assets/images/bike1.jpg"
import Bike2 from "../assets/images/bike2.jpg"
import Bike3 from "../assets/images/bike3.jpg"
import Bike4 from "../assets/images/bike4.webp"
import Bike5 from "../assets/images/bike5.jpg"
import Bike6 from "../assets/images/bike6.webp"
import Bike7 from "../assets/images/bike7.jpg"
import Bike8 from "../assets/images/bike8.jpg"
import Bike9 from "../assets/images/bike9.jpg"
import Bike10 from "../assets/images/bike10.jpg"
const BikeCard=()=>{
    return(
        <div>
            <div className="card-container">
            <div className="card">
                    <img className="image-car" src={Bike1} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>                         
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Bike2} alt="" />
                    <div className="card-content">
                            <h3>Audi A6</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Bike3} alt="" />
                    <div className="card-content">
                            <h3>Audi R8</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Bike4} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>
                
                <div className="card">
                    <img className="image-car" src={Bike5} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                 <div className="card">
                    <img className="image-car" src={Bike6} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>                         
                            <button className="button">Buy Now</button>
                    </div>
                </div>
 
                <div className="card">
                    <img className="image-car" src={Bike7} alt="" />
                    <div className="card-content">
                            <h3>Audi A6</h3>                          
                            <button className="button">Buy Now</button>
                    </div>
                </div> 

                <div className="card">
                    <img className="image-car" src={Bike8} alt="" />
                    <div className="card-content">
                            <h3>Audi R8</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Bike9} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Bike10} alt="" />
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
export default BikeCard;