import React, { useEffect } from "react";
import HeaderRoute from "../components/HeaderRoute";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../services/Service.css";
import "../pages/home.css";
import intercom from "../Icons/intercom.png";
import solution from "../Icons/solution.png";
import skilledtechnicians from "../Icons/skilled technicians.png";
import technologysystem from "../Icons/technology system.png";
import costeffective from "../Icons/cost effective.png";
import hasslefree from "../Icons/hassle free.png";
import training from "../Icons/training.png";
import epabx from "../Images/4.png";
import epabxBottom from "../Images/epabx and intercom.jpg";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";

const EPABX = ({ setClick, state, click, setState }) => {
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
              EPABX & Intercom
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
                        src={intercom}
                        alt="intercom-icons"
                        className="service-img"
                        style={{ width: "3.5rem" }}
                      />
                      <p>
                        Experienced provider of EPABX & Intercom Installation
                        Services
                      </p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={solution}
                        alt="solution-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Comprehensive Solution for all size businesses</p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={skilledtechnicians}
                        alt="skilledtechnicians-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Experienced Engineers & Technicians</p>
                    </div>
                    <div className="service-card service-card--4">
                      <img
                        src={technologysystem}
                        alt="technologysystem-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Specialize in Installing & Maintaining the Latest
                        Technologies System
                      </p>
                    </div>
                    <div className="service-card service-card--5">
                      <img
                        src={costeffective}
                        alt="costeffective-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Cost Effective</p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={hasslefree}
                        alt="hasslefree-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Hassle-Free Maintenance</p>
                    </div>
                    <div className="service-card service-card--7">
                      <img
                        src={training}
                        alt="training-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>We Provide Training & Support</p>
                    </div>
                  </div>
                  <div className="service-box-img col">
                    <img src={epabx} alt="epabx" className="serviceImg" />
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
                    Are you looking for an effective and dependable EPABX and
                    intercom installation solution for your company? Incretech
                    is the only place to go! With more than 8 years of expertise
                    in the field, we have established ourselves as a top
                    supplier of all-inclusive and custom solutions for companies
                    of all sizes.
                  </p>

                  <p>
                    Our team of qualified engineers and technicians can design,
                    install, and maintain EPABX systems and intercoms to satisfy
                    all of your requirements because they are experts in the
                    most recent technologies. From small businesses to major
                    corporations, we have the knowledge to offer you a
                    specialized solution that will maximize production,
                    effectiveness, and efficiency.
                  </p>
                  <p>
                    At Incretech, we recognise that every organization is
                    different, which is why we provide specialized solutions
                    that are created to satisfy your particular needs. Our EPABX
                    systems and intercoms are made to improve communication
                    inside your business, enabling smooth communication between
                    staff members, departments, and locations.
                  </p>
                  <p>
                    We guarantee great customer service and hassle-free
                    installation and maintenance services. With the least amount
                    of downtime and interference with your business activities,
                    our team will work with you to guarantee that your system is
                    installed and maintained to the highest standards. To ensure
                    that you and your staff get the most of your system, we also
                    offer training and support.
                  </p>
                  <p>
                    At Incretech, we're passionate about giving organizations
                    the greatest communication options available, and we're
                    dedicated to offering outstanding service and support. You
                    can be confident that your company will gain access to the
                    newest technology, adapted to your unique needs, with the
                    help of our EPABX and Intercom installation services.
                  </p>
                </div>

                <div className="services-image-container">
                  <img
                    src={epabxBottom}
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

export default EPABX;
