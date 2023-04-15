import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import "../components/Sidebar.css";
import { RxCross2 } from "react-icons/rx";
import { Link as L } from "react-scroll";

import { HiOutlineChevronDown } from "react-icons/hi";
import sublinks from "../newData.js";

const Sidebar = ({ setClick, click }) => {
  const [state, setState] = useState(false);

  const showMenu = () => {
    console.log("hii");
    setState((prev) => !prev);
  };

  return (
    <section className="section-sidebar">
      <aside className="aside">
        <RxCross2
          style={{
            fontSize: "2rem",
            position: "absolute",
            top: "14px",
            right: "22px",
            cursor: "pointer",
          }}
          onClick={() => setClick(false)}
        />
        <div className="sidebar-content">
          <Link to="/" onClick={() => setClick(false)}>
            <p>Home</p>
          </Link>

          <L
            // activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: ".3em",
            }}
          >
            Services <HiOutlineChevronDown onClick={showMenu} />
          </L>

          {state && (
            <div style={{ margin: "0 1.2em" }}>
              {sublinks.map((link, i) => (
                <div key={link.id}>
                  <Link
                    to={`/${link.link}`}
                    className="sub-menu"
                    onClick={() => setClick(false)}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* <a href="#teams" onClick={() => setClick(false)}>
            <p>Teams</p>
          </a> */}

          <Link to="about" onClick={() => setClick(false)}>
            <p>About</p>
          </Link>
          <Link to="career" onClick={() => setClick(false)}>
            <p>Career</p>
          </Link>
          <Link to="contact" onClick={() => setClick(false)}>
            <p>contact</p>
          </Link>
          <a
            href="https://shop.incretech.in/"
            target="_blank"
            className="shop-now"
          >
            Shop Now
          </a>
        </div>

        <div className="developed">
          <p>developed by incretech</p>
        </div>
      </aside>

      <div
        className={`${click && "overlay-sidebar"}`}
        onClick={() => setClick(false)}
      ></div>
    </section>
  );
};

export default Sidebar;
