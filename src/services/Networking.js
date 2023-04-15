import React, { useEffect } from "react";
import HeaderRoute from "../components/HeaderRoute";
import "../services/Service.css";
import "../pages/home.css";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CCtv from "../Icons/cctv.png";
import comprehensivenetworking from "../Icons/comprehensive networking.png";
import certifiedprofessional from "../Icons/certified professional.png";
import expertise from "../Icons/expertise.png";
import solution from "../Icons/solution.png";
import monitoringandmaintenance from "../Icons/monitoring and maintenance.png";
import widerangeofproducts from "../Icons/widerangeofproducts.png";
import weassistyou from "../Icons/we assist you.png";
import networking from "../Images/5.png";
import networkingBottom from "../Images/networking.jpg";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";

const Networking = ({ setClick, state, click, setState }) => {
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
              Networking
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
                        src={comprehensivenetworking}
                        alt="comprehensivenetworking-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Comprehensive Networking Services to all Size of
                        business
                      </p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={certifiedprofessional}
                        alt="certifiedprofessional-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Team of Certified professionals</p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={expertise}
                        alt="expertise-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Expertise to support all your networking needs</p>
                    </div>
                    <div className="service-card service-card--4">
                      <img
                        src={solution}
                        alt="solution-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Solution that are tailored your specific business
                        requirements
                      </p>
                    </div>
                    <div className="service-card service-card--5">
                      <img
                        src={monitoringandmaintenance}
                        alt="monitoringandmaintenance-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Proactive monitoring & maintenance services</p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={widerangeofproducts}
                        alt="widerangeofproducts-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Wide Range of Services</p>
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
                      src={networking}
                      alt="networking"
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
                    With our extensive networking services, Incretech Pvt. Ltd.
                    is committed to keeping your company connected and safe.
                    Being a top supplier of networking solutions, we are
                    qualified to plan, set up, and maintain intricate network
                    infrastructure for companies of all sizes.
                  </p>

                  <p>
                    Experts in the most recent technologies, including LAN/WAN
                    design, network security, wireless networking, VPNs, and
                    cloud-based solutions, our team of certified specialists. We
                    offer solutions that are customized to match the unique
                    demands of your company, making sure that your network is
                    dependable, secure, and expandable to meet your changing
                    requirements.
                  </p>
                  <p>
                    Network outages may be expensive and disruptive to your
                    organization, which is something we are aware of at
                    Incretech. To ensure that your network is constantly up and
                    operating properly, avoiding downtime and improving
                    production, we offer proactive monitoring and maintenance
                    services. You may feel confident knowing that your company
                    is connected and protected thanks to our round-the-clock
                    support.
                  </p>
                  <p>
                    Our networking solutions are created to improve your
                    company's operations and free you up to concentrate on your
                    strengths. We offer individualized services that are
                    tailored to your particular requirements, making sure you
                    make the most of your network. Our team is committed to
                    providing outstanding service and support, and we work hard
                    to go above and beyond your expectations at every turn.
                  </p>
                  <p>
                    At Incretech, we're dedicated to giving organizations
                    dependable, secure networking solutions that are made to
                    foster their expansion and success. Count on us to maintain
                    your company's connectivity and security with our extensive
                    networking services.
                  </p>
                </div>

                <div className="services-image-container">
                  <img
                    src={networkingBottom}
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

export default Networking;
