import React, { useEffect } from "react";
import HeaderRoute from "../components/HeaderRoute";
import "../services/Service.css";
import "../pages/home.css";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import wifi from "../Icons/wifi.png";
import highspeed from "../Icons/high speed.png";
import solution from "../Icons/solution.png";
import widerangeofproducts from "../Icons/widerangeofproducts.png";
import costeffective from "../Icons/cost effective.png";
import maintenanceandrepair from "../Icons/maintenance and repair.png";
import certifiedprofessional from "../Icons/certified professional.png";
import WIFIextension from "../Images/10.png";
import WIFIextensionBottom from "../Images/wifi extension.jpg";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";

const Wifi = ({ setClick, state, click, setState }) => {
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
              Wi-Fi Extensions
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
                        src={wifi}
                        alt="wifi-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>We provide Wi-Fi Extension Services</p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={highspeed}
                        alt="highspeed-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Specialize in providing High-Speed, Reliable Wi-Fi
                        Access
                      </p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={solution}
                        alt="solution-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Our Wi-Fi Extensions solutions are designed to expand
                        your current Wi-Fi Network
                      </p>
                    </div>
                    <div className="service-card service-card--4">
                      <img
                        src={widerangeofproducts}
                        alt="widerangeofproducts-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Wide Range of Options</p>
                    </div>
                    <div className="service-card service-card--5">
                      <img
                        src={costeffective}
                        alt="costeffective-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Secure, Reliable & Cost Effective way to extend your
                        current Wi-Fi Network
                      </p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={maintenanceandrepair}
                        alt="maintenanceandrepair-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Best in Customer Service and Support</p>
                    </div>
                    <div className="service-card service-card--7">
                      <img
                        src={certifiedprofessional}
                        alt="certifiedprofessional-icons"
                        className="service-img"
                        style={{ width: "4rem" }}
                      />
                      <p>
                        Our Team of Expert is available to answer any query you
                        may have
                      </p>
                    </div>
                  </div>
                  <div className="service-box-img col">
                    <img
                      src={WIFIextension}
                      alt="WIFIextension"
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
                    You should always turn to Incretech for Wifi Extension
                    services. We are aware of how critical a solid, dependable
                    WiFi connection is in the current digital era, whether
                    you're working from home or managing a company. Because of
                    this, we provide a variety of Wifi Extension solutions
                    tailored to your specific requirements. Your present WiFi
                    network will be evaluated by our team of specialists, who
                    will then make recommendations for the best ways to increase
                    your coverage.
                  </p>

                  <p>
                    We sell top-notch goods, such as Wifi Extenders, Access
                    Points, and Routers, that are simple to install and made to
                    give you fast, secure, and continuous WiFi connectivity. Our
                    technical support services are accessible around-the-clock
                    to make sure that your Wifi Extension solutions are
                    consistently functional. In order for you to stay connected
                    with confidence, we are dedicated to giving our customers
                    the greatest customer care and support.
                  </p>
                </div>
                <div className="services-image-container">
                  <img
                    src={WIFIextensionBottom}
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

export default Wifi;
