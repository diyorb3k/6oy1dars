import rasm1 from "../components/img/Group 190.svg";
import rasm from "../components/img/Product.svg";
import rasim2 from "../components/img/Frame 49 (1).svg";

const Header = () => {
  return (
    <div className="container header">
      <nav className="header_nav">
        <div className="header_logo">
          <img src={rasm1} alt="" />
          <img src={rasm} alt="" />
        </div>
        <ul className="nav_ul">
          <li>
            <a className="nav_link" href="">
              Product
            </a>
          </li>
          <li>
            <a className="nav_link1" href="">
              Customers
            </a>
          </li>
          <li>
            <a className="nav_link1" href="">
              {" "}
              Pricing{" "}
            </a>
          </li>
          <li>
            <a className="nav_link1" href="">
              {" "}
              Resources
            </a>
          </li>
          <div className="header_right">
            <button className="header_btn1">Sign In</button>
            <button className="header_btn2">Sign Up</button>
            <img src={rasim2} alt="" />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
