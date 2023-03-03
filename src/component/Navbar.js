import React from "react";
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_margin">
          <div className="nav_logo">
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
            <div logo_title>StarClinch</div>
          </div>
          <div className="user">HELLO, ASHUTOSH</div>
        </div>
      </div>
    </>
  )
}

export default Navbar;