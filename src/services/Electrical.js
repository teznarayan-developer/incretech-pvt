import React, { useEffect } from "react";
import HeaderRoute from "../components/HeaderRoute";
import "../services/Service.css";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../pages/home.css";
import electricalservices from "../Icons/electrical services.png";
import widerangeofproducts from "../Icons/widerangeofproducts.png";
import certifiedprofessional from "../Icons/certified professional.png";
import toolsandtechnology from "../Icons/tools and technology.png";
import msg from "../Icons/msg.png";
import time from "../Icons/24x7.png";
import bestservice from "../Icons/best service.png";
import ElectricalEnergy from "../Images/7.png";
import ElectricalEnergyBottom from "../Images/electrical services.jpg";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";

const Electrical = ({ setClick, state, click, setState }) => {
  const closeSubmenu = () => {
    setState(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    ref: myRef,
    inView: myElementIsVisible,
    entry,
  } = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  return (
    <>
      {" "}
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
              Electrical Energy
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
                  <div className="services">
                    <div className="service-card service-card--1">
                      <img
                        src={electricalservices}
                        alt="electricalservices-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Professional Electrical Services</p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={widerangeofproducts}
                        alt="widerangeofproducts-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Wide Range of Electrical Services</p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={certifiedprofessional}
                        alt="certifiedprofessional-icons"
                        className="service-img"
                        style={{ width: "3.5rem" }}
                      />
                      <p>Team of Experienced & Qualified Electricians</p>
                    </div>
                    <div className="service-card service-card--4">
                      <img
                        src={toolsandtechnology}
                        alt="toolsandtechnology-icons"
                        className="service-img"
                        style={{ width: "3.5rem" }}
                      />
                      <p>Get latest Tools & Technologies</p>
                    </div>
                    <div className="service-card service-card--5">
                      <img
                        src={msg}
                        alt="msg-icons"
                        className="service-img"
                        style={{ width: "3.5rem" }}
                      />
                      <p>Energy efficiency Advice & Solutions</p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={time}
                        alt="time-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>24x7 Services</p>
                    </div>
                    <div className="service-card service-card--7">
                      <img
                        src={bestservice}
                        alt="bestservice-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Best Electrical Services & Solutions</p>
                    </div>
                  </div>
                  <div className="service-box-img col">
                    <img
                      src={ElectricalEnergy}
                      alt="ElectricalEnergy"
                      className="serviceImg"
                    />
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
                    We at Incretech are your dependable source for all of your
                    electrical requirements. Our team of knowledgeable and
                    experienced electricians is committed to giving you the best
                    possible service. To guarantee that all of our
                    installations, repairs, and maintenance are completed to the
                    greatest standards, we are furnished with the most recent
                    tools and technologies. We also offer energy-saving
                    recommendations and solutions to assist you reduce your
                    energy expenditures. We are here for you around-the-clock,
                    whether you require emergency electrical services or
                    same-day services for simple tasks. With every assignment,
                    we work hard to go above and beyond your expectations
                    because we take pride in our dedication to excellence and
                    client satisfaction. You can rely on us to deliver
                    electrical solutions that are reliable and specifically
                    suited to your needs.
                  </p>
                </div>
                <div className="services-image-container">
                  <img
                    src={ElectricalEnergyBottom}
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

export default Electrical;
