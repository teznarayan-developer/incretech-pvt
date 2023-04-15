import React, { useEffect } from "react";
import HeaderRoute from "../components/HeaderRoute";
import "../services/Service.css";
import "../pages/home.css";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import doorphone from "../Icons/door phone.png";
import combination from "../Icons/combination.png";
import bell from "../Icons/bell.png";
import maintenancandrepair from "../Icons/maintenance and repair.png";
import widerangeofproducts from "../Icons/widerangeofproducts.png";
import safeandsecure from "../Icons/safe and secure.png";
import weassistyou from "../Icons/we assist you.png";
import VDP from "../Images/12.png";
import VDPBottom from "../Images/video door phone.jpg";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";

const VideoDoorPhone = ({ setClick, state, click, setState }) => {
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
              Video Door Phone
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
                        src={doorphone}
                        alt="doorphone-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Leading provider of Video Door Phone Services</p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={combination}
                        alt="combination-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        2 Combination system:- High Quality Digital Video Camera
                        with a two-way audio intercom
                      </p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={bell}
                        alt="bell-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Allows you to monitor your front door 24x7 with
                        automatic recording & alerting feature
                      </p>
                    </div>
                    <div className="service-card service-card--4">
                      <img
                        src={maintenancandrepair}
                        alt="maintenancandrepair-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Professionals Installation & Maintenance</p>
                    </div>
                    <div className="service-card service-card--5">
                      <img
                        src={widerangeofproducts}
                        alt="widerangeofproducts-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Wide Range of Accessories & Upgrades</p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={safeandsecure}
                        alt="safeandsecure-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>We keep your Home & Business Safe & Secure</p>
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
                      src={VDP}
                      alt="video-door-phone"
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
                    We sell top-notch goods, such as Wifi Extenders, Access
                    Points, and Routers, that are simple to install and made to
                    give you fast, secure, and continuous WiFi connectivity. Our
                    technical support services are accessible around-the-clock
                    to make sure that your Wifi Extension solutions are
                    consistently functional. In order for you to stay connected
                    with confidence, we are dedicated to giving our customers
                    the greatest customer care and support.
                  </p>

                  <p>
                    Our Video Door Phone systems come with a variety of
                    capabilities, including night vision, motion detection, and
                    automated recording, to provide you a full range of security
                    options. To make sure your system is properly configured and
                    operating effectively, we also provide expert installation
                    and maintenance services. You may have peace of mind knowing
                    that your house or place of business is secure with
                    Incretech's Video Door Phone systems since they are
                    dependable and cutting-edge.
                  </p>
                </div>
                <div className="services-image-container">
                  <img
                    src={VDPBottom}
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

export default VideoDoorPhone;
