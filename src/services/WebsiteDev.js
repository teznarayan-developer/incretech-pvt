import React, { useEffect } from "react";
import HeaderRoute from "../components/HeaderRoute";
import "../services/Service.css";
import "../pages/home.css";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import bestservice from "../Icons/best service.png";
import maintaining from "../Icons/maintaining.png";
import web from "../Icons/web.png";
import certifiedprofessional from "../Icons/certified professional.png";
import bestsolution from "../Icons/best solution.png";
import technology from "../Icons/technology.png";
import perfect from "../Icons/perfect.png";
import Website from "../Images/13.png";
import WebsiteBottom from "../Images/website-development.jpg";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";

const WebsiteDev = ({ setClick, state, click, setState }) => {
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
              Website Development
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
                        src={web}
                        alt="web-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Full service of Web Development Agency</p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={maintaining}
                        alt="maintaining-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Specialize in WordPress, Flutter,React,Bootstrap, CSS &
                        HTML
                      </p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={certifiedprofessional}
                        alt="certifiedprofessional-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Experienced Team of Web Developers & Designers</p>
                    </div>
                    <div className="service-card service-card--4">
                      <img
                        src={technology}
                        alt="technology-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        We use powerful technologies to create High-performance,
                        Secure & Dynamic Websites
                      </p>
                    </div>
                    <div className="service-card service-card--5">
                      <img
                        src={bestservice}
                        alt="bestservice-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Up-to-date Technology, Support & Guidance</p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={bestsolution}
                        alt="bestsolution-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Delivers the Best Solutions for our clients</p>
                    </div>
                    <div className="service-card service-card--7">
                      <img
                        src={perfect}
                        alt="perfect-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Our team provides you with the Web Development Services
                        to meet your needs
                      </p>
                    </div>
                  </div>
                  <div className="service-box-img col">
                    <img src={Website} alt="Website" className="serviceImg" />
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
                    Welcome to Incretech, the web development company you should
                    contact for all of your website needs. Our team of skilled
                    and imaginative web developers is dedicated about providing
                    cutting-edge solutions that go above and beyond what our
                    clients expect. We build visually attractive, responsive,
                    and user-friendly websites that are tailored to fit the
                    particular demands of each of our clients using cutting-edge
                    technologies like WordPress, Flutter, React, Bootstrap, CSS,
                    and HTML.
                  </p>

                  <p>
                    At Incretech, we recognise that your website serves as the
                    online representation of your company, which is why we place
                    a high value on offering specialized and dependable web
                    development services. Our team will collaborate closely with
                    you to make sure that your website reflects the principles
                    and character of your business while also being adapted to
                    your unique demands and requirements. We are committed to
                    delivering high-performance websites that are geared towards
                    search engine optimization, security, and speed.
                  </p>
                  <p>
                    We have the knowledge, experience, and talent to realize
                    your idea, whether it be for a straightforward brochure
                    website, an e-commerce platform, or a sophisticated web
                    application. Web hosting, website optimization, website
                    maintenance, and development are all part of our service
                    offerings.
                  </p>
                  <p>
                    At Incretech, we are dedicated to providing outstanding
                    customer service and take great pride in forging enduring
                    bonds with our customers. To guarantee that your website is
                    always up to date and operating at its peak, we work hard to
                    provide fast and dependable assistance. Pick Incretech for
                    all of your web development requirements, and allow us to
                    assist you in expanding your company.
                  </p>
                </div>
                <div className="services-image-container">
                  <img
                    src={WebsiteBottom}
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

export default WebsiteDev;
