import React, { useEffect } from "react";
import HeaderRoute from "../components/HeaderRoute";
import "../services/Service.css";
import { InView, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../pages/home.css";
import cctv from "../Images/2.png";
import cctvBottom from "../Images/cctv.jpg";
import CCtv from "../Icons/cctv.png";

import expertise from "../Icons/expertise.png";
import skilledtechnicians from "../Icons/skilled technicians.png";
import services from "../Icons/services.png";
import consultation from "../Icons/consultation.png";

import widerangeofproducts from "../Icons/widerangeofproducts.png";
import weassistyou from "../Icons/we assist you.png";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";

const CCTV = ({ setClick, state, click, setState }) => {
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
              CCTV
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
                        src={CCtv}
                        alt="cctv-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        CCTV Installation Services for Residential & Commercial
                      </p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={expertise}
                        alt="expertise-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>8 years of Experience</p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={skilledtechnicians}
                        alt="skilledtechnicians-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Highly Trained & Certified Engineers and Technicians
                      </p>
                    </div>
                    <div className="service-card service-card--4">
                      <img
                        src={widerangeofproducts}
                        alt="widerangeofproducts-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Wide Range of CCTV Systems</p>
                    </div>
                    <div className="service-card service-card--5">
                      <img
                        src={services}
                        alt="services-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>High Level of Services</p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={consultation}
                        alt="consultation-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>FREE Quote & On-Site Consultation</p>
                    </div>
                    <div className="service-card service-card--7">
                      <img
                        src={weassistyou}
                        alt="weassistyou-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>We assist you every step of the way</p>
                    </div>
                  </div>

                  <div className="service-box-img col">
                    <img src={cctv} alt="cctv" className="serviceImg" />
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
                    The security of your home or place of business is extremely
                    important to Incretech. We have therefore made it our aim to
                    offer consumers all throughout India the most dependable and
                    skilled CCTV installation services. We've developed a solid
                    reputation as a reliable supplier of cutting-edge CCTV
                    systems over the course of our more than 8 years in the
                    business.
                  </p>

                  <p>
                    In addition to being specialists in their fields, our team
                    of highly qualified engineers and technicians is committed
                    to making sure that your security needs are met to the
                    greatest possible standard. From fundamental digital systems
                    to the most recent IP-based systems, we have the know-how to
                    develop, install, and manage a wide variety of CCTV
                    solutions according to your particular requirements.
                  </p>
                  <p>
                    Every customer has distinct needs and budgets, which
                    Incretech is aware of. To make sure you obtain the best
                    system for your needs and budget, we provide a free on-site
                    consultation. To deliver a solution that is specifically
                    designed to match your individual security needs, our team
                    will collaborate with you every step of the way.
                  </p>
                  <p>
                    When it comes to security, quality should never be
                    sacrificed, in our opinion. We exclusively make use of the
                    top technology and equipment on the market because of this.
                    We provide a large selection of CCTV products from top
                    manufacturers, so you can be guaranteed of the best quality
                    and dependability.
                  </p>
                  <p>
                    We have the knowledge to offer the ideal solution, whether
                    you're searching for a basic CCTV system to safeguard your
                    home or a more sophisticated system to keep an eye on
                    several areas. At Incretech, we do more than just set up
                    CCTVs. Our customers benefit from peace of mind knowing that
                    their residences and places of business are safe.
                  </p>
                </div>
                <div className="services-image-container">
                  <img
                    src={cctvBottom}
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

export default CCTV;
