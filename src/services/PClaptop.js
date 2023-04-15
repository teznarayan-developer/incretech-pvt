import React, { useEffect } from "react";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import HeaderRoute from "../components/HeaderRoute";
import "../services/Service.css";
import "../pages/home.css";
import expertise from "../Icons/expertise.png";
import skilledtechnicians from "../Icons/skilled technicians.png";
import services from "../Icons/services.png";
import costeffective from "../Icons/cost effective.png";
import fastandreliable from "../Icons/fast and reliable.png";
import widerangeofproducts from "../Icons/widerangeofproducts.png";
import weassistyou from "../Icons/we assist you.png";
import PC from "../Images/1.png";
import pcbottom from "../Images/pc & laptop.png";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage.js";

const PClaptop = ({ setClick, state, click, setState }) => {
  const closeSubmenu = () => {
    setState(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: myRef, inView: myElementIsVisible, entry } = useInView();

  return (
    <>
      <HeaderRoute setClick={setClick} setState={setState} />
      <motion.section
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="service-conatiner"
        id="services"
        onMouseOver={closeSubmenu}
      >
        <main className="container">
          <div ref={myRef}>
            <h2
              // Best
              // CCTV
              // and
              // Intercom
              // service
              // provider
              // in
              // Navi
              // Mumbai
              className="heading-secondary"
            >
              PC & Laptops
            </h2>
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <motion.div
                  ref={ref}
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : { width: 0 }}
                  exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
                  className="service-box-info"
                >
                  <div className="services col ">
                    <div className="service-card service-card--1">
                      <img
                        src={services}
                        alt="HighLevelServices-icon"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Assembling, Repairing & Reselling</p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={expertise}
                        alt="expertise-icon"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>8 years of Experience</p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={skilledtechnicians}
                        alt="skilledtechnicians-icon"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Team of Skilled Technicians</p>
                    </div>
                    <div className="service-card service-card--4">
                      <img
                        src={fastandreliable}
                        alt="fastandreliable-icon"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Fast & Reliable Services</p>
                    </div>
                    <div className="service-card service-card--5">
                      <img
                        src={costeffective}
                        alt="fastandreliable-icon"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>competitive Pricing</p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={widerangeofproducts}
                        alt="widerangeofproducts-icon"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Wide Range of Products</p>
                    </div>
                    <div className="service-card service-card--7">
                      <img
                        src={weassistyou}
                        alt="weassistyou-icon"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>We assist you every step of the way</p>
                    </div>
                  </div>
                  <div className="service-box-img col">
                    <img src={PC} alt="PC&Laptop" className="serviceImg" />
                  </div>
                </motion.div>
              )}
            </InView>
          </div>

          <InView threshold={0.25}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                exit={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ type: "keyframes", duration: 0.3 }}
                className="info-container"
              >
                <div className="services-info-container">
                  <p>
                    We at Incretech, are proud of the fantastic PC and Laptop
                    solutions we provide to our clients. Because of our more
                    than 8 years of expertise in the industry, we are now known
                    as a Top provider of excellent services that yield results.
                  </p>

                  <p>
                    High End laptops to specialized systems are just a few of
                    the products we offer to meet your particular needs. Because
                    we are aware that every client has individual demands we
                    take pride in developing solutions that are especially
                    suited to them
                  </p>
                  <p>
                    At Incretech, we think it's important to Prioritize our
                    clients. We work hard to go above and beyond your
                    expectations by providing you with quick, dependable
                    service. You will receive the Finest value for your money
                    without having to sacrifice quality thanks to our aggressive
                    pricing.
                  </p>
                  <p>
                    Our crew is available to assist you whether you require a
                    completely new PC or laptop or only need to repair an
                    existing one. We take the time to walk you through the
                    process and provide you all the information you need to make
                    an informed decision since we know how overwhelming
                    technology can be.
                  </p>
                  <p>
                    At Incretech, we're not just in the laptop and computer
                    sales business. Building relationships with our customers is
                    what we do. You can count on receiving nothing less than
                    first-rate service, unmatched knowledge, and a dedication to
                    your pleasure when you select us.
                  </p>
                </div>
                <div className="services-image-container">
                  <img
                    src={pcbottom}
                    alt="Application-development"
                    className="serviceImg-2"
                  />
                </div>
              </motion.div>
            )}
          </InView>
        </main>

        <div className="container" onMouseOver={closeSubmenu}>
          <h3
            style={{
              color: "#000",
              fontSize: "1.8rem",
              textAlign: "center",
              marginTop: "4em",
              marginBottom: "1em",
            }}
          >
            View More...
          </h3>
          <ServicesImage />
        </div>
      </motion.section>
      <Footer setClick={setClick} setState={setState} />
    </>
  );
};

export default PClaptop;
