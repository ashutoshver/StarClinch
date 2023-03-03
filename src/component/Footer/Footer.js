import React from "react";
import '../Shortlist.css';
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  
  return (
    <>
      <div className="footer">
        <div className="foot_log">
          <div className="footer_logo">
            <div className="logo">
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.8229 14.9844L25.8854 0.453125H20.4688L13.3333 17.901L19.0625 23.6302L26.1458 30.7135L23.1771 38.0052L20.1563 30.7135L18.9583 27.7969L18.3854 27.5885L8.75 23.6302L11.5625 22.4323V16.1823L0 20.9219V26.2865L14.5313 32.276L20.4688 46.7552H25.8854L33.0208 29.3594L27.2917 23.6302L20.1563 16.4948L23.1771 9.20312L26.1458 16.4948L27.3438 19.4115L27.9167 19.6719L37.6042 23.6302L34.7396 24.776V31.026L46.3542 26.2865V20.9219L31.8229 14.9844Z" fill="url(#paint0_linear_1_684)" />
                <defs>
                  <linearGradient id="paint0_linear_1_684" x1="34.1663" y1="13.5127" x2="9.47875" y2="36.179" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FB6A2B" />
                    <stop offset="1" stop-color="#F11C79" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div logo_title><b>StarClinch</b></div>
          </div>

          <div className="icon">
            <span><BsFacebook /></span>
            <span><BsTwitter /></span>
            <span><BsYoutube /></span>
            <span><BsInstagram /></span>
          </div>
        </div>

        <div className="footer_content">
          
          <div className="buyers_aboutus">
            <div className="buyers">
              <h3>FOR BUYERS</h3>
              <p>Our Buyers</p>
              <p>Browse</p>
              <p>Post Your Reqirement</p>
              <p>Entertainment on EMI</p>
            </div>
            <div className="aboutUs">
              <h3>ABOUT US</h3>
              <p>Our Story</p>
              <p>Careers</p>
            </div>
          </div>

          <div className="artist_policy">
            <div className="artist">
              <h3>FOR ARTIST</h3>
              <p>Login</p>
              <p>Artist SignUp</p>
              <p>Artist Subscriptions</p>
            </div>
            <div className="policy">
              <h3>POLICY</h3>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Disclaimer</p>
              <p>FAQs</p>
            </div>
          </div>

          <div className="registered">
            <h3>REGISTERED OFFICE <br/>ADDRESS:</h3>
            <p>VINSM Globe Private Limited</p>
            <p>Percept House, Ground Floor</p>
            <p>East of Kailash, Nes Delhi</p>
            <p>CIN:U52605DL2012PTC236944</p>
            <p>Phone: +91 11 498 498 01</p>
            <p className="contactUs">Contact Us</p>
          </div>
        </div>

        <div className="copyright">
          <div className="payment_icon">
            <img src="https://i.pinimg.com/564x/43/ed/1d/43ed1d4685a1e776836cf19557cfca73.jpg" alt="visa" />
            <img src="https://i.pinimg.com/236x/37/ec/77/37ec777fa00a64ebb61e47ede3205567.jpg" alt="mastercard" />
            <img src="https://i.pinimg.com/236x/3c/83/9c/3c839c72dac5bfe0dca769abb1ae6020.jpg" alt="maestro" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2eZHiKbSuHstt1CwIH2MliJhuIu7y_WUVbw&usqp=CAU" alt="amex" />
            <img src="https://i.pinimg.com/236x/e9/9c/11/e99c1127e426501bddeb9968ffa99223.jpg" alt="paytm" />
            <img src="https://i.pinimg.com/236x/0d/a5/56/0da556be226d5dc221d98b57efd9c1f6.jpg" alt="rupay" />
          </div>
          <div><span>	&#169;Copyright2015-2023</span> | <span className="green">VINSM Globe Pvt.Ltd.</span> | <span>All Rights Reserved</span></div>
          
        </div>


   </div>
  </>
)

}
export default Footer;