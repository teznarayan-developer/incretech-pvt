import React, { useEffect } from "react";
import HeaderRoute from "../components/HeaderRoute";
import "../services/Service.css";
import "../pages/home.css";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import solar from "../Icons/solar.png";
import maintaining from "../Icons/maintaining.png";
import certifiedprofessional from "../Icons/certified professional.png";
import widerangeofproducts from "../Icons/widerangeofproducts.png";
import costeffective from "../Icons/cost effective.png";
import maintenanceandrepair from "../Icons/maintenance and repair.png";
import perfect from "../Icons/perfect.png";
import Energy from "../Images/6.png";
import EnergyBottom from "../Images/solar energy.jpeg";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";

const SolarEnergy = ({ setClick, state, click, setState }) => {
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
              Solar Energy
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
                        src={solar}
                        alt="solar-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Provides Hign Quality solar installation Services</p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={maintaining}
                        alt="maintaining-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Specialize in Installing, Maintaining & Repairing Solar
                        Energy
                      </p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={certifiedprofessional}
                        alt="certifiedprofessional-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Highly Trained and Certified Professionals</p>
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
                        Quality Solar Systems that are Reliable, Effecient &
                        Cost Effective
                      </p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={maintenanceandrepair}
                        alt="maintenanceandrepair-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>We provide Maintenance & Repair Services</p>
                    </div>
                    <div className="service-card service-card--7">
                      <img
                        src={perfect}
                        alt="perfect-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Perfect Solar System to meet your needs</p>
                    </div>
                  </div>
                  <div className="service-box-img col">
                    <img src={Energy} alt="cctv" className="serviceImg" />
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
                    At IncreTech, we are passionate about helping our customers
                    reduce their energy costs while also having a good influence
                    on the environment. Because we think solar energy is the
                    energy of the future, we're dedicated to providing the best
                    solar installation services. Our team of experts will
                    collaborate with you to develop a solar energy system that
                    satisfies your specific requirements and financial
                    constraints. We'll take care of the entire installation
                    procedure from beginning to end, guaranteeing that your
                    solar system is operational without a hitch.
                  </p>

                  <p>
                    To ensure that your solar system is effective, dependable,
                    and affordable, we only utilise the most recent and
                    trustworthy solar technology, including conventional
                    grid-tied systems, off-grid systems, and hybrid systems. To
                    keep your system operating smoothly and effectively for
                    years to come, we also provide maintenance and repair
                    services. You may save money on your energy bills and lessen
                    your carbon impact with our cutting-edge and dependable
                    solar solutions. Now, let us assist you in switching to
                    solar power.
                  </p>
                </div>
                <div className="services-image-container">
                  <img
                    src={EnergyBottom}
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

export default SolarEnergy;
