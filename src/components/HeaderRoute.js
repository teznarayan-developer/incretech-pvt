import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../components/Header.css";
import { IoMenuOutline } from "react-icons/io5";

import inc from "../assets/logo-new1.png";
import incLOGO from "../assets/logo.png";
import { Link as L, NavLink } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";
import incretechLogo from "../assets/incretech-logo.png";

const HeaderRoute = ({ setClick, setState }) => {
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    // openSubmenu(page, { center, bottom });
    // console.log(page, tempBtn, center, bottom);
    setState(true);
  };

  const closeSubmenu = () => {
    setState(false);
  };

  // const [image, setImage] = useState({
  //   src: "",
  // });

  // const listenScrollEvent = (e) => {
  //   if (window.scrollY > 200) {
  //     setImage({
  //       src: inc,
  //     });
  //   } else {
  //     setImage({
  //       src: incLOGO,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);
  // }, []);

  return (
    <header className="header ">
      <div className="flex-container container">
        <L to="/" className="link logo">
          <img
            src={incretechLogo}
            className="icon-img-new"
            // src={window.scrollY > 200 ? inc : incLOGO}
            // className={window.scrollY > 200 ? "icon-img2" : "icon-img"}
            alt="ict-logo"
          />
        </L>
        <nav className="nav">
          <ul className="nav__list nav__list--secondary">
            {/* <li className="nav-item">
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onMouseOver={closeSubmenu}
              >
                Home
              </Link>
            </li> */}

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active contact" : "contact color"
                }
                onMouseOver={closeSubmenu}
                // style={{ textDecoration: "none", color: "#08a3e4" }}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item service-nav-link">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onMouseOver={displaySubmenu}
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: ".3em",
                }}
              >
                Services <HiOutlineChevronDown />
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                activeClass="active"
                to="teams"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onMouseOver={closeSubmenu}
                className="over"
              >
                Teams
              </Link>
            </li> */}
            <li className="nav-item">
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  isActive ? "active contact" : "contact color"
                }
                onMouseOver={closeSubmenu}
                // style={{ textDecoration: "none", color: "#08a3e4" }}
              >
                Career
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active contact" : "contact color"
                }
                onMouseOver={closeSubmenu}
                // style={{ textDecoration: "none", color: "#08a3e4" }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active contact" : "contact color"
                }
                onMouseOver={closeSubmenu}
                // style={{ textDecoration: "none", color: "#08a3e4" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <a
            href="https://shop.incretech.in/"
            target="_blank"
            className="shop-now-btn"
          >
            Shop Now
          </a>
        </nav>

        <button className="menu" onClick={() => setClick(true)}>
          <IoMenuOutline className=" icon-menu" />
        </button>
      </div>
    </header>
  );
};

export default HeaderRoute;
