import React, { useEffect } from "react";
import "../components/About.css";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";

// import history from "../assets/History.jpg";
import satish from "../assets/satish-salunkhe.png";
import sameer from "../assets/sameer-bhoir.png";
import ghanshyam from "../assets/ghanshyam-chavan.png";
import history from "../assets/history.png";
import HeaderRoute from "../components/HeaderRoute";
import Footer from "../components/Footer.js";

const About = ({ setState, setClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeSubmenu = () => {
    setState(false);
  };
  const { ref: myRef, inView: myElementIsVisible, entry } = useInView();
  const { ref: myRefnew, inView: myElementIsVisiblenew } = useInView();

  let arrow = ">";
  return (
    <>
      <HeaderRoute setClick={setClick} setState={setState} />
      <motion.section
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        id="about"
        className="container"
        onMouseOver={closeSubmenu}
      >
        <div className="history-container">
          <div className="hero-info ">
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
              style={{ color: "#08a3e4" }}
              // style={{ color: "#0e1318", textAlign: "left" }}
            >
              History
            </h2>
            {/* {myElementIsVisible && ( */}
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <motion.p
                  ref={ref}
                  initial={{ opacity: 0, x: "-10%" }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: "-10%" }
                  }
                  exit={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: "-10%" }
                  }
                  transition={{ type: "keyframes", duration: 1, delay: 0.3 }}
                  className="text"
                >
                  Our story began in 2014, with a firm name Youth Engineer which
                  provides a services of Computer Assembling and CCTV
                  Installation. Later on , we moved towards all the more
                  services such as EPABX and intercom, WIFI Repeaters, Biometric
                  and Access Control, VDP, Solar, Air Conditioner. We also
                  provide IT Software consulting and services such as website &
                  applications development, digital marketing & branding a
                  business with new startup named as Incretech Private Limited.
                </motion.p>
              )}
            </InView>
            {/* )} */}
          </div>
          <div className="img-container col"></div>
        </div>

        <div className="mgmt">
          {/* <h2 className="heading-secondary" style={{ color: "#000" }}>
            Management
          </h2> */}

          <div className="mgmt-container">
            <div className="mgmt--1">
              {/* {myElementIsVisible && ( */}
              <InView threshold={0.25}>
                {({ ref, inView }) => (
                  <motion.img
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    exit={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      x: {
                        type: "spring",
                        stiffness: 300,
                        damping: 300,
                        bounce: 2,
                      },
                      duration: 1,
                      delay: 1,
                    }}
                    src={satish}
                    className="about-img"
                  />
                )}
              </InView>
              {/* )} */}
              <div>
                <h3>satish salunkhe</h3>
                <p className="text">Co-Founder & Director</p>
              </div>
            </div>
            <div className="mgmt--2">
              {/* {myElementIsVisible && ( */}
              <InView threshold={0.25}>
                {({ ref, inView }) => (
                  <motion.img
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    exit={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      x: {
                        type: "spring",
                        stiffness: 300,
                        damping: 300,
                        bounce: 2,
                      },
                      duration: 1,
                      delay: 1,
                    }}
                    src={ghanshyam}
                    className="about-img"
                  />
                )}
              </InView>
              {/* )} */}
              <h3>ghanshyam chavan</h3>
              <p className="text">Co-Founder & Director</p>
            </div>
            <div className="mgmt--3">
              {/* {myElementIsVisible && ( */}
              <InView threshold={0.25}>
                {({ ref, inView }) => (
                  <motion.img
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    exit={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      x: {
                        type: "spring",
                        stiffness: 300,
                        damping: 300,
                        bounce: 2,
                      },
                      duration: 1,
                      delay: 1,
                    }}
                    src={sameer}
                    className="about-img"
                  />
                )}
              </InView>
              {/* )} */}
              <h3> sameer bhoir</h3>
              <p className="text">Managing Director</p>
            </div>
          </div>
        </div>

        <div className="vision-mission-container">
          <h3
            className="heading-tertiary"
            style={{ textAlign: "left", color: "#08a3e4", marginBottom: "1em" }}
          >
            Vision, Mission & Values
          </h3>
          <div className="vision-mission-grid-container">
            {/* {myElementIsVisiblenew && ( */}
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: "10%" }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0, x: 0 }
                      : { opacity: 0, y: "10%" }
                  }
                  exit={
                    inView
                      ? { opacity: 1, y: 0, x: 0 }
                      : { opacity: 0, y: "10%" }
                  }
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 300,
                      damping: 300,
                      bounce: 2,
                    },
                    duration: 1,
                  }}
                  className="vision-container"
                >
                  <div className="heading-text">
                    <h4>vision</h4>
                  </div>
                  <div className="text-container">
                    <p>
                      To be a world-class provider of engineering and technology
                      services, creating innovative solutions for our clients to
                      help them succeed in the ever-evolving world.
                    </p>
                  </div>
                </motion.div>
              )}
            </InView>
            {/* )} */}

            {/* {myElementIsVisiblenew && ( */}
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: "20%" }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0, x: 0 }
                      : { opacity: 0, y: "20%" }
                  }
                  exit={
                    inView
                      ? { opacity: 1, y: 0, x: 0 }
                      : { opacity: 0, y: "20%" }
                  }
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 300,
                      damping: 300,
                      bounce: 2,
                    },
                    duration: 1,
                  }}
                  className="mission-container"
                >
                  <div className="heading-text">
                    {" "}
                    <h4>Mission</h4>{" "}
                  </div>
                  <div className="text-container">
                    <p>
                      We strive to make our services accessible to all,
                      providing our clients with comprehensive and reliable
                      solutions. We also strive to deliver outstanding customer
                      service, adding value to our clients through our expertise
                      and commitment to excellence.
                    </p>
                  </div>
                </motion.div>
              )}
            </InView>
            {/* )}

            {myElementIsVisiblenew && ( */}
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: "30%" }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0, x: 0 }
                      : { opacity: 0, y: "30%" }
                  }
                  exit={
                    inView
                      ? { opacity: 1, y: 0, x: 0 }
                      : { opacity: 0, y: "30%" }
                  }
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 300,
                      damping: 300,
                      bounce: 2,
                    },
                    duration: 1,
                  }}
                  className="value-container"
                >
                  <div>
                    <h4 className="heading-text">Values</h4>
                  </div>
                  <div className="text-container">
                    <p>{arrow} Reliability</p>
                    <p>{arrow} Integrity</p>
                    <p>{arrow} Quality</p>
                    <p>{arrow} Innovative</p>
                    <p>{arrow} TeamWork</p>
                    <p>{arrow} Passion</p>
                    <p>{arrow} Fun</p>
                    <p>{arrow} Thrive</p>
                  </div>
                </motion.div>
              )}
            </InView>
            {/* )} */}
          </div>
        </div>
      </motion.section>
      <Footer setClick={setClick} setState={setState} />
    </>
  );
};

export default About;
