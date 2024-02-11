import "./Navbar.css";
import logo from "../assets/flc_design20240210216790.png";
import { useState } from "react";
const Navbar = ({ logo }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <div className="logo">
            <h1>{logo}</h1>
          </div>
          <div className="menu">
            <ul className="menu-ul">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="./bg-remover">Background Remover</a>
              </li>
              <li>
                <a href="./about">About</a>
              </li>
              <li>
                <a href="./pricing">Pricing</a>
              </li>
              <li>How to use?</li>
            </ul>
          </div>
          <div className="hamburger-menu" onClick={() => setShow(!show)}>
            {show ? (
              <h3>x</h3>
            ) : (
              <div class="hamburger-lines">
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
              </div>
            )}
          </div>
        </nav>
        {show && (
          <div className="mobile-menu">
            <ul className="mobile-menu-ul">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="./bg-remover">Background Remover</a>
              </li>
              <li>
                <a href="./about">About</a>
              </li>
              <li>
                <a href="./pricing">Pricing</a>
              </li>
              <li>How to use?</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;
