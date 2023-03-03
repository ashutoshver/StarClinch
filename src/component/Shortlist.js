import React from "react";
import './Shortlist.css';



function Shortlist() {
  

  return (
    <>
      <h2>Shortlist</h2>
      <div className="content">
        <p className="detail">Details:</p>
        <div className="time">
          <div className="date">
            <h3>Event Date</h3>
            <span>2023-02-22</span>
          </div>
          <div className="location">
            <h3>Location</h3>
            <span>Delhi, India</span>
          </div>
          <div className="budget">
            <h3>Budget</h3>
            <span className="bg_black"><i>₹500,000</i></span>
          </div>
        </div>
        <p className="singers">Singers under 5 lakh</p>
        <h1>SINGERS</h1>
        <h3 className="select_artist">Select an artist that matches your vibe.</h3>


      </div>

    </>
    
  )
}

export default Shortlist;