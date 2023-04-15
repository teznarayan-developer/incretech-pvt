import React, { useEffect } from "react";
import HeaderRoute from "../components/HeaderRoute";
import "../services/Service.css";
import "../pages/home.css";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CCtv from "../Icons/cctv.png";
import boosters from "../Icons/boosters.png";
import services from "../Icons/services.png";
import easyinstall from "../Icons/easy install.png";
import widerangeofproducts from "../Icons/widerangeofproducts.png";
import verified from "../Icons/verified.png";
import best from "../Icons/best.png";
import weassistyou from "../Icons/we assist you.png";
import signalBooster from "../Images/8.png";
import signalBoosterBottom from "../Images/mobile signal booster.webp";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";

const MobileSIgnalBooster = ({ setClick, state, click, setState }) => {
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
              Mobile Signal Boosters
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
                        src={boosters}
                        alt="boosters-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Leading provider of Mobile Signal Boosters</p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={services}
                        alt="services-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Provides High Quality Services</p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={easyinstall}
                        alt="easyinstall-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Easy to Install</p>
                    </div>
                    <div className="service-card service-card--4">
                      <img
                        src={widerangeofproducts}
                        alt="widerangeofproducts-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Variety of Features</p>
                    </div>
                    <div className="service-card service-card--5">
                      <img
                        src={verified}
                        alt="verified-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Our Boosters are verified with all major carriers</p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={best}
                        alt="best-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Best Mobile Signal Boosting Solution</p>
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
                      src={signalBooster}
                      alt="mobilesignalBooster"
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
                    Do you consistently have weak cellphone reception and slow
                    data connections everywhere you are? Don't look anywhere
                    else but Incretech Pvt. Ltd. With cutting-edge equipment
                    created to improve wireless coverage in homes, offices, and
                    vehicles, our team of professionals is committed to offering
                    the best mobile signal boosting solutions available. With
                    the help of our mobile signal boosters, you can experience
                    better speech quality and reception on all of your mobile
                    devices while also boosting signal strength and internet
                    speed.
                  </p>

                  <p>
                    Our products are simple to set up and have a number of
                    features, including adjustable gain, frequency, and power to
                    ensure optimal efficacy. Our boosters give dependable
                    coverage and excellent performance and are approved by all
                    major carriers. We at Incretech are always available to
                    assist you in locating the ideal mobile signal boosting
                    solution for your requirements and take pleasure in our
                    dedication to providing exceptional customer service.
                  </p>
                </div>
                <div className="services-image-container">
                  <img
                    src={signalBoosterBottom}
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

export default MobileSIgnalBooster;
