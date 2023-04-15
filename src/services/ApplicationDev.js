import React, { useEffect } from "react";
import HeaderRoute from "../components/HeaderRoute";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../services/Service.css";
import "../pages/home.css";
import perfect from "../Icons/perfect.png";
import app from "../Icons/app.png";
import maintaining from "../Icons/maintaining.png";
import web from "../Icons/web.png";
import certifiedprofessional from "../Icons/certified professional.png";
import maintenanceandrepair from "../Icons/maintenance and repair.png";
import technology from "../Icons/technology.png";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";
import Application from "../Images/14.png";
import ApplicationBottom from "../Images/application development.jpg";

const ApplicationDev = ({ setClick, state, click, setState }) => {
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
              Application Development
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
                  <div className="services ">
                    <div className="service-card service-card--1">
                      <img
                        src={app}
                        alt="app-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Leading Application Development Service Provider</p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={maintaining}
                        alt="maintaining-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Specialize in Flutter & React Native Technologies</p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={web}
                        alt="web-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Custom Application for Web & Mobile Platforms</p>
                    </div>
                    <div className="service-card service-card--4">
                      <img
                        src={certifiedprofessional}
                        alt="certifiedprofessional-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Expert Developers & Designers</p>
                    </div>
                    <div className="service-card service-card--5">
                      <img
                        src={maintenanceandrepair}
                        alt="maintenanceandrepair-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Get Services like Development, Design, Integration,
                        Deployment & Maintenance
                      </p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={technology}
                        alt="technology-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>We use Latest Technologies & Development</p>
                    </div>
                    <div className="service-card service-card--7">
                      <img
                        src={perfect}
                        alt="perfect-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Our solutions are Secure, Scalable & Maintainable</p>
                    </div>
                  </div>
                  <div className="service-box-img col">
                    <img
                      src={Application}
                      alt="Application-development"
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
                    Incretech is a dynamic application development services
                    provider that brings innovation and creativity to the table.
                    We specialize in creating customized applications for web
                    and mobile platforms, with a focus on delivering an
                    unparalleled user experience. Our team of expert developers
                    and designers are passionate about creating robust,
                    high-quality applications that meet the unique needs of our
                    clients. With a strong emphasis on Flutter and React Native
                    technologies, we are able to deliver stunning,
                    cross-platform applications that work seamlessly on both iOS
                    and Android devices.
                  </p>

                  <p>
                    Including development, design, integration, deployment, and
                    maintenance, we provide a comprehensive variety of services.
                    Our team stays current with emerging technological
                    developments, enabling us to create solutions that are safe,
                    scalable, and simple to manage. Our goal at Incretech is to
                    give our clients the best services and supports possible so
                    they can get the most from their Application Development
                    project.
                  </p>
                </div>
                <div className="services-image-container">
                  <img
                    src={ApplicationBottom}
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

export default ApplicationDev;
