import React from "react";
import rasim3 from "../components/img/button (1).svg";
import rasim4 from "../components/img/amico.png";
import rasim5 from "../components/img/icon bd (1).svg";
import rasin6 from "../components/img/icon (11).svg";
import rasin7 from "../components/img/icon (12).svg";
import rasin8 from "../components/img/icon (13).svg";
import rasin9 from "../components/img/image bg.jpg";
import rasin10 from "../components/img/Bitmap.png";
import rasin11 from "../components/img/Bitmap (1).png";
import sanmi from "../components/img/Group 204 (1).svg";
import odm from "../components/img/odamni rasimi.png";
import wahed from "../components/img/wahed.png";
import sahed from "../components/img/sahed.png";
import rasimfoter from "../components/img/card_pay.png";
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
      <h4 className="text">Product was Built Specifically for You</h4>
      <div className="econ_pch">
        <div className="card_pagee">
          <img src={rasim5} alt="" />
          <h4 className="firist">First click tests</h4>
          <p className="chaild">While most people enjoy casino gambling,</p>
        </div>

        <div className="card_pagee">
          <img src={rasin6} alt="" />
          <h4 className="firist">Design surveys</h4>
          <p className="chaild">
            Sports betting, lottery and bingo playing for the fun
          </p>
        </div>

        <div className="card_pagee">
          <img src={rasin7} alt="" />
          <h4 className="firist">Preference tests</h4>
          <p className="chaild">The Myspace page defines the individual.</p>
        </div>

        <div className="card_pagee">
          <img src={rasin8} alt="" />
          <h4 className="firist">Five second tests</h4>
          <p className="chaild">
            Personal choices and the overall personality of the person.{" "}
          </p>
        </div>
      </div>
      <div className="btn_heroo">
        <button className="singup">SIGN UP NOW</button>
      </div>
      <div className="contents">
        <h3>Contents Strategies</h3>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>
      <div className="card_grupa">
        <div className="card_righ1">
          <img src={rasin9} alt="" />
          <p>
            By <span>Wahid Ari</span> | 03 March 2019
          </p>
          <h5>Increasing Prosperity With Positive Thinking</h5>
        </div>

        <div className="card_righ1">
          <img src={rasin10} alt="" />
          <p>
            By <span>Wahid Ari</span> | 03 March 2019
          </p>
          <h5 className="the">Motivation Is The First Step To Success</h5>
        </div>

        <div className="card_righ1">
          <img src={rasin11} alt="" />
          <p>
            By <span>Wahid Ari</span> | 03 March 2019
          </p>
          <h5>Increasing Prosperity With Positive Thinking</h5>
        </div>
      </div>
      <div className="textt">
        <h4>Price Table</h4>
        <p>We offer competitive price</p>
      </div>
      <div className="page_card">
        <div className="pch">
          <h5>Free</h5>
          <p className="price">Brief price description</p>
          <div className="cena">
            <h1>0</h1>
            <div className="month">
              <h6 className="uzd">$</h6>
              <p>Per / month</p>
            </div>
          </div>
          <span>Only 2 Operators</span>
          <p className="can">Notifications</p>
          <p className="ladg">Landing Pages</p>
          <button>Order Now</button>
        </div>
        {/* ///////////// */}
        <div className="pch">
          <h5>Standard</h5>
          <p className="price">Brief price description</p>
          <div className="cena">
            <h1>5</h1>
            <div className="month">
              <h6 className="uzd">$</h6>
              <p>Per / month</p>
            </div>
          </div>
          <span>5+ Operators</span>
          <p className="can">Notifications</p>
          <p className="ladg">Landing Pages</p>
          <button>Order Now</button>
        </div>
        {/* /////// */}
        <div className="pch">
          <h5>Premium</h5>
          <p className="price">Brief price description</p>
          <div className="cena">
            <h1>10</h1>
            <div className="month">
              <h6 className="uzd">$</h6>
              <p>Per / month</p>
            </div>
          </div>
          <span>Only 2 Operators</span>
          <p className="can">Notifications</p>
          <p className="ladg">Landing Pages</p>
          <button>Order Now</button>
        </div>
      </div>
      <div className="say">
        <span>What Clients Say</span>
        <p>Problems trying to resolve the conflict between </p>
        <p>the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className="foter_top">
        <div className="cart1">
          <img src={sanmi} alt="" />
          <p className="productt">
            Product helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <div className="teximg">
            <img src={odm} alt="" />
            <div>
              {" "}
              <p className="wahed">Wahid Ari</p>
              <p className="desig">Designer</p>
            </div>
          </div>
        </div>

        <div className="cart1">
          <img src={sanmi} alt="" />
          <p className="productt">
            Product helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <div className="teximg">
            <img src={wahed} alt="" />
            <div>
              {" "}
              <p className="wahed">Wahid Ari</p>
              <p className="desig">Designer</p>
            </div>
          </div>
        </div>

        <div className="cart1">
          <img src={sanmi} alt="" />
          <p className="productt">
            Product helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <div className="teximg">
            <img src={sahed} alt="" />
            <div>
              {" "}
              <p className="wahed">Wahid Ari</p>
              <p className="desig">Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="foter">
        <div className="card_left">
          <h4>Join 100 Compannies who boost their business with Product</h4>
          <button>Get This</button>
        </div>
        <div className="card_right">
          <img className="card_foter" src={rasimfoter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Bace;
