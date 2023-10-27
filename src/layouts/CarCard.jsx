import React from "react";
import "../assets/css/Card.css"
import Car1 from "../assets/images/car1.webp"
import Car2 from "../assets/images/car2.webp"
import Car3 from "../assets/images/car3.webp"
import Car4 from "../assets/images/car4.jpg"
import Car5 from "../assets/images/car5.webp"
import Car6 from "../assets/images/car6.jpg"
import Car7 from "../assets/images/car7.jpg"
import Car8 from "../assets/images/car8.jpg"
import Car9 from "../assets/images/car9.jpg"
import Car10 from "../assets/images/car10.jpg"
const CarCard=()=>{
    return(
        <div>
            <div className="card-container">
            <div className="card">
                    <img className="image-car" src={Car6} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>                         
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Car7} alt="" />
                    <div className="card-content">
                            <h3>Audi A6</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Car8} alt="" />
                    <div className="card-content">
                            <h3>Audi R8</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Car9} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>
                
                <div className="card">
                    <img className="image-car" src={Car10} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>
                <div className="card">
                    <img className="image-car" src={Car1} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>                         
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Car2} alt="" />
                    <div className="card-content">
                            <h3>Audi A6</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Car3} alt="" />
                    <div className="card-content">
                            <h3>Audi R8</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Car4} alt="" />
                    <div className="card-content">
                            <h3>Audi A4</h3>
                            
                            <button className="button">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <img className="image-car" src={Car5} alt="" />
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
export default CarCard;