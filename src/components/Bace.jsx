import React from "react";
import rasim3 from "../components/img/button (1).svg";
import rasim4 from "../components/img/amico.png";

const Bace = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero_right">
          <h3 className="work">Work at the speed of thoughtx</h3>
          <p className="page">
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>

          <div className="btn_grup">
            <button className="get">Get started</button>
            <button className="imgbtn">
              <img className="heroimg2" src={rasim3} alt="" />
            </button>
          </div>
        </div>
        <div className="hero_left">
          <img className="heroimg" src={rasim4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Bace;
