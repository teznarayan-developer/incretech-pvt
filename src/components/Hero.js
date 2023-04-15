import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import imageSlide from "../Data.js";
// import firstHeroImage from "../assets/cctv-hero.jpg";

import "../components/Hero.css";
import "../pages/home.css";

const Hero = ({ setClick, setState }) => {
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

  console.log(imageSlide);
  const [currentIndex, setCurrentIndex] = useState(0);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentIndex].url})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(currentIndex + 1);

      if (currentIndex === 2) {
        setCurrentIndex(0);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const closeSubmenu = () => {
    setState(false);
  };
  return (
    <motion.section
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      onMouseOver={closeSubmenu}
      id="hero"
      className="hero-section "
    >
      <main className="container">
        {/* <img src={firstHeroImage} className="heroImg" /> */}

        <>
          <div className="hero-img-container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ type: "keyframes", duration: 1, delay: 0.2 }}
              className="hero-img-container--1"
            >
              <div className="heroImg-1" style={bgImageStyle}></div>{" "}
              <p className="info-text-left-1">
                {imageSlide[currentIndex].text}
              </p>
            </motion.div>
            {/* <div className="hero-img-container--2">
            <div className="heroImg-2"></div>{" "}
            <p className="info-text-left-2">
              Incretech is a leading provider of CCTV <br />
              installation services and for residential <br />
              and commercial across india.
            </p>
          </div>
          <div className="hero-img-container--3">
            <div className="heroImg-3"></div>{" "}
            <p className="info-text-left-3">
              Incretech is a leading provider of CCTV <br />
              installation services and for residential <br />
              and commercial across india.
            </p>
          </div> */}
          </div>

          <div className="hero-info  ">
            {/* {myElementIsVisible && ( */}
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <motion.p
                  className="sub-heading"
                  ref={ref}
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0, x: 0 }
                      : { opacity: 0, y: "-100%" }
                  }
                  exit={
                    inView
                      ? { opacity: 1, y: 0, x: 0 }
                      : { opacity: 0, y: "-100%" }
                  }
                  transition={{ type: "spring", duration: 1 }}
                >
                  Welcome to
                </motion.p>
              )}
            </InView>
            {/* )} */}
            {/* {myElementIsVisible && ( */}
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <motion.h1
                  // Incretech
                  // leading
                  // software
                  // and
                  // hardware
                  // company
                  ref={ref}
                  className="primary-heading"
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0, x: 0 }
                      : { opacity: 0, y: "1-00%" }
                  }
                  exit={
                    inView
                      ? { opacity: 1, y: 0, x: 0 }
                      : { opacity: 0, y: "-100%" }
                  }
                  transition={{ type: "spring", duration: 1 }}
                >
                  INCRETECH
                </motion.h1>
              )}
            </InView>
            {/* )} */}
            {/* {myElementIsVisible && ( */}
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <motion.p
                  ref={ref}
                  className="text"
                  initial={{ opacity: 0, y: "100%" }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }
                  }
                  exit={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }
                  }
                  transition={{ ease: "easeIn", duration: 0.3, delay: 0.1 }}
                >
                  Incretech is focused on providing services that will benefit
                  you in the long run and trust our standard when you are in
                  need of help again. Let us help you in your growth journey.
                </motion.p>
              )}
            </InView>
            {/* )} */}
          </div>
        </>
      </main>
    </motion.section>
  );
};

export default Hero;
