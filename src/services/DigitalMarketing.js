import React, { useEffect } from "react";
import HeaderRoute from "../components/HeaderRoute";
import "../services/Service.css";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../pages/home.css";
import weassistyou from "../Icons/we assist you.png";
import digitalmarketing from "../Icons/digital marketing.png";
import widerangeofproducts from "../Icons/widerangeofproducts.png";
import certifiedprofessional from "../Icons/certified professional.png";
import maintaining from "../Icons/maintaining.png";
import services from "../Icons/services.png";
import grow from "../Icons/grow.png";
import Digital from "../Images/11.png";
import DigitalBottom from "../Images/digital marketing.webp";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";

const DigitalMarketing = ({ setClick, state, click, setState }) => {
  const closeSubmenu = () => {
    setState(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { ref: myRef, inView: myElementIsVisible } = useInView({
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
              Digital Marketing
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
                        src={digitalmarketing}
                        alt="digitalmarketing-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Leading Digital Marketing Company</p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={widerangeofproducts}
                        alt="widerangeofproducts-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Wide Range of Services</p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={certifiedprofessional}
                        alt="certifiedprofessional-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Experienced Digital Marketing Team</p>
                    </div>
                    <div className="service-card service-card--4">
                      <img
                        src={maintaining}
                        alt="maintaining-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Provides comprehensive solutions to increase visibility
                        and engagement
                      </p>
                    </div>
                    <div className="service-card service-card--5">
                      <img
                        src={services}
                        alt="services-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Our Services include:- SEO, SEM, Website Design, Content
                        Marketing, Email Marketing & more
                      </p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={grow}
                        alt="grow-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        We help businesses Grow & Reach their Target Audience
                      </p>
                    </div>
                    <div className="service-card service-card--7">
                      <img
                        src={weassistyou}
                        alt="grow-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>We assist you every step of the way</p>
                    </div>
                  </div>
                  <div className="service-box-img col">
                    <img
                      src={Digital}
                      alt="Digital-marketing"
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
                    Incretech is a leader in digital marketing and offers
                    cutting-edge solutions that help organizations reach new
                    heights. We concentrate on developing tailored plans that
                    address the particular requirements of each firm we work
                    with thanks to our talented team of professionals. Search
                    engine optimization (SEO), social media marketing (SMM),
                    website design and development, content marketing, email
                    marketing, and other services are all part of our
                    comprehensive digital marketing offerings.
                  </p>

                  <p>
                    We assist companies in connecting with their target market
                    and achieving their objectives by utilizing the newest
                    digital marketing tools and strategies. At Incretech, we
                    recognise the value of producing quantifiable outcomes, and
                    our staff is dedicated to providing superior performance,
                    boosting traffic and conversion rates. Incretech provides
                    the knowledge and skills to advance your digital marketing
                    if you want to expand your company and strengthen your
                    online presence.
                  </p>
                </div>

                <div className="services-image-container">
                  <img
                    src={DigitalBottom}
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

export default DigitalMarketing;
