import React from "react";
import "../assets/css/footer.css"
import Logo1 from "../assets/images/facebook.png"
import Logo2 from "../assets/images/twitter.png"
import Logo3 from "../assets/images/linkedin.png"
const Footer=()=>{
    return(
        <div>
            <footer>
                <div className="footer-col">
                    <h4>products</h4>
                    <ul>
                        <li>teams</li>
                        <li>advertising</li>
                        <li>talent</li>
                        <li>Electronics</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>network</h4>
                    <ul>
                        <li>Audi MMI</li>
                        <li>cockpit</li>
                        <li>Blutooth</li>
                        <li>Smartphone</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                       <li>Jaguar</li>
                        <li>Lexus</li>
                        <li>BMW</li>                      
                        <li>land Rover</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow us</h4>
                    <ul className="hello">
                        <li><a href="https://www.facebook.com/audiofficial/" target="_blank"><img className="image-logo" src={Logo1} alt="" /></a></li>
                        <li><a href="https://twitter.com/audi?lang=en" target="_blank"><img className="image-logo" src={Logo2} alt="" /></a></li>
                        <li><a href="https://www.linkedin.com/company/audi-ag/" target="_blank"><img className="image-logo" src={Logo3} alt="" /></a></li>
                    </ul>
                </div>
            </footer>
              {/* <b> hi</b> */}
        </div>
    )
}
export default Footer;