import React, { useEffect } from "react";
import "../components/Contact.css";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiSmartphone } from "react-icons/fi";
import Footer from "./Footer";
import { motion } from "framer-motion";

import { IoLocationOutline } from "react-icons/io5";
import HeaderRoute from "../components/HeaderRoute";

const Contact = ({ setState, setClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeSubmenu = () => {
    setState(false);
  };
  return (
    <>
      <HeaderRoute setClick={setClick} setState={setState} />
      <motion.section
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        id="contact"
        className="container"
        onMouseOver={closeSubmenu}
      >
        <h2
          Best
          CCTV
          and
          Intercom
          service
          provider
          in
          Navi
          Mumbai
          className="heading-secondary"
          // style={{ color: "#0e1318", textAlign: "left" }}
          style={{ color: "#08a3e4", textAlign: "left" }}
        >
          Contact us
        </h2>
        <div className="contact-container">
          <div className="contact-container-info">
            <div className="contact-info-container ">
              <div>
                <HiOutlineMail style={{ color: "#000", fontSize: "1.4rem" }} />
                <p className="text">contact@incretechprivatelimited.in</p>
              </div>
              <div>
                <FiSmartphone style={{ color: "#000", fontSize: "1.4rem" }} />
                <p className="text">+91 7021351600</p>
              </div>
              <div>
                <HiOutlineLocationMarker
                  style={{ color: "#000", fontSize: "1.4rem" }}
                />
                <p className="text">
                  Nl - 1/A, 39/2, 2, Sector - 10, Lt Dhondu Ambekar Marg, Nerul
                  (W), Near Kid's Choice, Navi Mumbai-400706
                </p>
              </div>
            </div>

            <div className="formbold-form-wrapper">
              <form action="https://docs.google.com/forms/d/e/1FAIpQLScVQ7yhGhQVzElqD6FkslM207Q-fBOm3oi-CJonNDyxSAADeQ/viewform">
                <div className="formbold-mb-5">
                  <label htmlFor="name" className="formbold-form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    // name="name"
                    name="entry.2005620554"
                    id="name"
                    placeholder="Full Name"
                    className="formbold-form-input"
                  />
                </div>

                <div className="formbold-mb-5">
                  <label htmlFor="email" className="formbold-form-label">
                    Business Email Id
                  </label>
                  <input
                    type="email"
                    // name="email"
                    name="entry.1045781291"
                    id="email"
                    placeholder="Enter your email"
                    className="formbold-form-input"
                  />
                </div>

                <div className="formbold-mb-5">
                  <label htmlFor="phone" className="formbold-form-label">
                    Phone number
                  </label>
                  <input
                    type="number"
                    // name="phone"
                    name="entry.1166974658"
                    id="phone"
                    placeholder="Enter your Phone number"
                    className="formbold-form-input"
                  />
                </div>

                <div className="formbold-mb-5">
                  <label htmlFor="city" className="formbold-form-label">
                    City
                  </label>
                  <input
                    type="text"
                    // name="city"
                    name="entry.1065046570"
                    id="city"
                    placeholder="City"
                    className="formbold-form-input"
                  />
                </div>

                <div className="formbold-mb-5">
                  <h4 className="formbold-form-label">
                    Where did you hear about us?
                  </h4>
                  <div className="form-radio-btn">
                    <div className="form-container-flex">
                      <input
                        type="radio"
                        id="f-option"
                        name="entry.1017542698"
                      />
                      <label htmlFor="f-option">Google</label>
                    </div>
                    <div className="form-container-flex">
                      <input
                        type="radio"
                        id="s-option"
                        name="entry.1017542698"
                      />
                      <label htmlFor="s-option">
                        Social Media (Facebook, Instagram, Etc.)
                      </label>
                    </div>

                    <div className="form-container-flex">
                      <input
                        type="radio"
                        id="t-option"
                        name="entry.1017542698"
                      />
                      <label htmlFor="t-option">Word of Mouth/Referral</label>
                    </div>

                    <div className="form-container-flex">
                      <input
                        type="radio"
                        id="o-option"
                        name="entry.1017542698"
                      />
                      <label htmlFor="o-option">Other</label>
                    </div>
                    <div className="form-container-flex">
                      <label htmlFor="other">Other:</label>
                      <input
                        type="text"
                        id="other"
                        // name="other"
                        name="entry.1017542698"
                        className="formbold-form-input-other"
                        style={{ backgroundColor: "transparent" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="formbold-mb-5">
                  <label htmlFor="comments" className="formbold-form-label">
                    Comments
                  </label>
                  <textarea
                    rows="4"
                    // name="comments"
                    name="entry.839337160"
                    id="comments"
                    placeholder="Add a comment…"
                    className="formbold-form-input"
                  ></textarea>
                </div>

                <div>
                  <button className="formbold-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="map-container">
            <h3
              className="map-heading"
              style={{ padding: "1em", textAlign: "center" }}
            >
              <IoLocationOutline /> COME AND VISIT US
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15086.432135977399!2d73.0178017!3d19.0369861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x310b156759317e3c!2sIncretech%20pvt.%20ltd.!5e0!3m2!1sen!2sin!4v1658818113653!5m2!1sen!2sin"
              width="100%"
              // height="450"
              frameBorder="0"
              style={{
                border: 0,
                height: "100%",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.section>
      <Footer setClick={setClick} setState={setState} />
    </>
  );
};

export default Contact;
