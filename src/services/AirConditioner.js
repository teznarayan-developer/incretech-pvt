import React, { useEffect } from "react";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import HeaderRoute from "../components/HeaderRoute";
import "../services/Service.css";
import "../pages/home.css";
import airconditioner from "../Icons/air conditioner.png";
import maintaining from "../Icons/maintaining.png";
import bestservice from "../Icons/best service.png";
import customersatisfaction from "../Icons/customer satisfaction.png";
import technology from "../Icons/technology.png";
import solution from "../Icons/solution.png";
import certifiedprofessional from "../Icons/certified professional.png";
import AC from "../Images/9.png";
import ACBottom from "../Images/air conditioner.jpg";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";

const AirConditioner = ({ setClick, state, click, setState }) => {
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
              Air Conditioner
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
                        src={airconditioner}
                        alt="airconditioner-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Leading Air Conditioner Provider</p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={maintaining}
                        alt="maintaining-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Specialize in all aspects of Air Conditioner Service
                      </p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={bestservice}
                        alt="bestservice-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Highly Quality Product and Services</p>
                    </div>
                    <div className="service-card service-card--4">
                      <img
                        src={customersatisfaction}
                        alt="customersatisfaction-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Customer Satisfaction</p>
                    </div>
                    <div className="service-card service-card--5">
                      <img
                        src={technology}
                        alt="technology-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Get Latest Technology Products</p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={solution}
                        alt="solution-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Best Air Conditioner Solutions</p>
                    </div>
                    <div className="service-card service-card--7">
                      <img
                        src={certifiedprofessional}
                        alt="certifiedprofessional-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Highly Trained & Certified Technicians</p>
                    </div>
                  </div>
                  <div className="service-box-img col">
                    <img src={AC} alt="AC" className="serviceImg" />
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
                    We at Incretech are specialists in keeping you cool and
                    comfortable all year long, making us more than just another
                    air conditioning service company. We have a wealth of
                    knowledge on air conditioning thanks to our many years of
                    expertise. From installations and maintenance to repairs and
                    replacements, we offer a wide range of services to fulfill
                    all of your needs. Modern tools and our staff of highly
                    trained specialists enable us to provide top-notch services
                    and products that are built to last.
                  </p>

                  <p>
                    We take great pride in offering the greatest air
                    conditioning options to our clients for their residences or
                    commercial spaces. We provide a variety of economical,
                    eco-friendly, and energy-efficient air conditioning
                    solutions. We are proud of our work and constantly aim for
                    excellence in all that we do. We offer the best customer
                    service around and always promise complete satisfaction.
                    Regardless of how hot outdoors it gets, you can rely on us
                    to keep you cool and comfortable.
                  </p>
                </div>

                <div className="services-image-container ">
                  <img
                    src={ACBottom}
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

export default AirConditioner;
