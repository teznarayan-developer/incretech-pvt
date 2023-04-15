import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "../components/GetInTouch.css";

const GetInTouch = () => {
  return (
    <section id="get-in-touch">
      <div className="get-in-touch-container">
        <h2
          className="Heading-get-in-touch"
          Best
          CCTV
          and
          Intercom
          service
          provider
          in
          Navi
          Mumbai
        >
          Let's Get In Touch
        </h2>
        <Link to="/contact" className="btn">
          Contact us
          <BsArrowRight className="left" />
        </Link>
      </div>
    </section>
  );
};

export default GetInTouch;
