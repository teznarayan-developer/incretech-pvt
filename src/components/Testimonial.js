import React from "react";
import "../components/Testimonial.css";
import GetInTouch from "./GetInTouch";
import GoogleReviews from "./GoogleReviews";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <main className="container">
        <h3
          className="heading-tertiary"
          style={{ color: "#000", textAlign: "left" }}
          // style={{ color: "#08a3e4", textAlign: "left" }}
        >
          Our customers love the Incretech experience
        </h3>

        <GoogleReviews />
        <GetInTouch />
      </main>
    </section>
  );
};

export default Testimonial;
