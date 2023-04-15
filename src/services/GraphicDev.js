import React, { useEffect } from "react";
import HeaderRoute from "../components/HeaderRoute";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../services/Service.css";
import "../pages/home.css";
import pen from "../Icons/pen.png";
import certifiedprofessional from "../Icons/certified professional.png";
import bestsolution from "../Icons/best solution.png";
import widerangeofproducts from "../Icons/widerangeofproducts.png";
import maintenanceandrepair from "../Icons/maintenance and repair.png";
import maintaining from "../Icons/maintaining.png";
import weassistyou from "../Icons/we assist you.png";
import graphic from "../Images/15.png";
import graphicBottom from "../Images/Graphic-designer.jpg";
import Footer from "../components/Footer";
import ServicesImage from "../components/ServicesImage";

const GraphicDev = ({ setClick, state, click, setState }) => {
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
              Graphic Design
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
                        src={pen}
                        alt="pen-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>
                        Professional Graphic Design services that helps
                        businesses stand out in the digital age
                      </p>
                    </div>
                    <div className="service-card service-card--2">
                      <img
                        src={certifiedprofessional}
                        alt="certifiedprofessional-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>Team of Experienced & Certified Designers</p>
                    </div>
                    <div className="service-card service-card--3">
                      <img
                        src={bestsolution}
                        alt="bestsolution-icons"
                        className="service-img"
                        style={{ width: "3.5rem" }}
                      />
                      <p>
                        We create visually appealing designs that communicate
                        your Brand Message effectively
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
                        src={maintenanceandrepair}
                        alt="maintenanceandrepair-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>We use Latest Designing Softwares & Technologies</p>
                    </div>
                    <div className="service-card service-card--6">
                      <img
                        src={maintaining}
                        alt="maintaining-icons"
                        className="service-img"
                        style={{ width: "3rem" }}
                      />
                      <p>We provide services for both Print & Digital Media</p>
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
                      src={graphic}
                      alt="graphic-design"
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
                    Do you want your company to stand out in the crowded digital
                    market of today? Don't look elsewhere—just Incretech Pvt.
                    Ltd. With aesthetically appealing designs that draw in your
                    audience, our expert graphic design services may help your
                    organization effectively deliver its message. The diverse
                    design solutions that our team of skilled designers can
                    produce range from logos and brochures to social media
                    graphics and product packaging.
                  </p>

                  <p>
                    To make sure that every design fits with our clients'
                    overall brand identity and message, we work closely with
                    them. We make an effort to produce designs that are not only
                    aesthetically beautiful but also successfully convey your
                    message since we understand how important consistency is. We
                    provide top-notch designs that are suitable for both digital
                    and print media by utilizing the most recent design tools
                    and methods. Count on us to use our graphic design services
                    to help you grow your company and leave a lasting impact in
                    the digital age.
                  </p>
                </div>

                <div className="services-image-container">
                  <img
                    src={graphicBottom}
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

export default GraphicDev;
