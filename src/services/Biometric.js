import React, { useEffect } from "react";
import HeaderRoute from "../components/HeaderRoute";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../services/Service.css";
import "../pages/home.css";
import biometric from "../Images/3.png";
import biometricBottom from "../Images/biometric & access control.jpg";
import Access from "../Icons/biometric.png";
import skilledtechnicians from "../Icons/skilled technicians.png";
import widerangeofproducts from "../Icons/widerangeofproducts.png";
import securityandconvenience from "../Icons/security and convenience.png";
import smartsecuritysolution from "../Icons/smart security solution.png";
import services from "../Icons/services.png";
import weassistyou from "../Icons/we assist you.png";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";

const Biometric = ({ setClick, state, click, setState }) => {
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
              // style={{ color: "#000" }}
            >
              Biometric & Access Control
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
                        src={Access}
                        alt="Access-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Biometric & Access Installation Services</p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={skilledtechnicians}
                        alt="skilledtechnicians-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Skilled & Certified professional</p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={widerangeofproducts}
                        alt="widerangeofproducts-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Wide Range of Services</p>
                    </div>
                    <div className="service-card service-card--4">
                      <img
                        src={securityandconvenience}
                        alt="securityandconvenience-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Our Products are designed to provide maximum Security
                        and Convenience
                      </p>
                    </div>
                    <div className="service-card service-card--5">
                      <img
                        src={services}
                        alt="services-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Variety of Additional Services</p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={smartsecuritysolution}
                        alt="smartsecuritysolution-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Smart Security Solutions</p>
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
                    <img
                      src={biometric}
                      alt="biometric"
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
                    At Incretech, we recognize how critical it is to maintain
                    the safety of your property at all times. To fulfill the
                    specific requirements of our customers, we provide a wide
                    variety of biometric and access control installation
                    services. Our position as a Top supplier of Smart Security
                    Solutions has been cemented by our more than 8 years of
                    experience in the field.
                  </p>

                  <p>
                    We're committed to making sure that your premises are safe
                    and secure, and our staff of qualified professionals is
                    knowledgeable in the most recent access control and
                    biometric technologies. Installation, upkeep, and repairs of
                    biometric scanners, door locks, and access control systems
                    are among the services we offer.
                  </p>
                  <p>
                    The security of any system should never be compromised,
                    according to Incretech. To secure your property with the
                    best level of protection and convenience, we only employ the
                    newest and most innovative security products available. Our
                    Access Control Systems are made to only let authorized
                    individuals on your property, protecting your company from
                    unauthorized entry.
                  </p>
                  <p>
                    Other services that we provide includes custom software and
                    hardware integration, remote access management, and end user
                    training. Your business will always be secure thanks to the
                    collaboration of our team as we build and implement a
                    security solution that satisfies your particular needs.
                  </p>
                  <p>
                    The installation of Biometric and Access Control Systems is
                    only one of our many services at Incretech. We work to
                    provide our clients the confidence that their properties are
                    secured by the newest and most cutting-edge security
                    measures on the market. You can relax knowing that your
                    company is safe and secure with our smart security
                    solutions.
                  </p>
                </div>

                <div className="services-image-container">
                  <img
                    src={biometricBottom}
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

export default Biometric;
