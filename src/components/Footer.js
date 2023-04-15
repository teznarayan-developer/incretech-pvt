import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "../components/Footer.css";
import { Link } from "react-router-dom";
import { ImYoutube2 } from "react-icons/im";
import FacebookChatPlugin from "./FacebookChatPlugin";

const Footer = ({ setClick, setState }) => {
  const year = new Date().getFullYear();

  const closeSubmenu = () => {
    setState(false);
  };

  return (
    <footer onMouseOver={closeSubmenu}>
      <FacebookChatPlugin />
      <div className="footer-container-grid container">
        <nav className="nav-col">
          <p className="footer-heading">Branches</p>
          <ul className="footer-nav">
            <li>
              <a
                className="footer-link"
                href="https://goo.gl/maps/hDbhvtcvuBQK49sP6"
                target="_blank"
              >
                Nerul
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="https://goo.gl/maps/mGY5rKt2gdmpeNPBA"
                target="_blank"
              >
                Kankavali
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Non-IT</p>
          <ul className="footer-nav">
            <li>
              <Link to={`/Digital-Marketing`} className="footer-link">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to={`/Graphic-Design`} className="footer-link">
                Graphic Design
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">IT</p>
          <ul className="footer-nav">
            <li>
              <Link to={`/pc&laptop`} className="footer-link">
                PC & Laptops
              </Link>
            </li>
            <li>
              <Link to={`/cctv`} className="footer-link">
                CCTV
              </Link>
            </li>
            <li>
              <Link to={`/biometric&AccessControl`} className="footer-link">
                Biometric & Access Control{" "}
              </Link>
            </li>
            <li>
              <Link to={`/EPABX&Intercom`} className="footer-link">
                EPABX & Intercom
              </Link>
            </li>
            <li>
              {" "}
              <Link to={`/networking`} className="footer-link">
                Networking
              </Link>
            </li>
            <li>
              {" "}
              <Link to={`/Solar-Energy`} className="footer-link">
                Solar Energy
              </Link>
            </li>
            <li>
              {" "}
              <Link to={`/Electrical-Services`} className="footer-link">
                Electrical Services{" "}
              </Link>
            </li>

            <li>
              {" "}
              <Link to={`/Mobile-Signal-Boosters`} className="footer-link">
                Mobile Signal Boosters
              </Link>
            </li>

            <li>
              <Link to={`/Air-Conditioner`} className="footer-link">
                Air Conditioner{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to={`/WiFi-Extensions`} className="footer-link">
                Wi-Fi Extensions
              </Link>
            </li>
            <li>
              {" "}
              <Link to={`/Video-Door-Phone`} className="footer-link">
                Video Door Phone
              </Link>
            </li>
            <li>
              <Link to={`/Website-Development`} className="footer-link">
                Website Development
              </Link>
            </li>

            <li>
              <Link to={`/Application-Development`} className="footer-link">
                Application Development
              </Link>{" "}
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <Link to="/about" className="footer-link" href="#">
                About
              </Link>
            </li>
            <li>
              <Link to="/career" className="footer-link" href="#">
                Career
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="footer-link" href="#">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/terms-and-conditions" className="footer-link" href="#">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-container container">
        <p className="footer-text" style={{ textAlign: "center" }}>
          © Copyright {year}, INCRETECH Group, All rights reserved.
        </p>
        <div className="social-media-handles-footer ">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/incretech_/"
                target="_blank"
                className="social-link"
              >
                <FaInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/incretech" target="_blank">
                <FaFacebookF className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/incretech-private-limited/"
                target="_blank"
              >
                <FaLinkedinIn className="linkedin" />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/Incretech_" target="_blank">
                <FaTwitter className="twitter" />
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/@incretech" target="_blank">
                <FaYoutube className="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
