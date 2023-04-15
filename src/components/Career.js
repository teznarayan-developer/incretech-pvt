import React, { useEffect } from "react";
import Footer from "./Footer";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import HeaderRoute from "./HeaderRoute";
import "../components/Career.css";
import CareerContactForm from "../components/CareerContactForm.js";

const Career = ({ setState, setClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeSubmenu = () => {
    setState(false);
  };

  const { ref: myRef, inView: myElementIsVisible, entry } = useInView();

  return (
    <>
      <HeaderRoute setClick={setClick} setState={setState} />
      <motion.section
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        onMouseOver={closeSubmenu}
        className="career-section"
      >
        <main className="container">
          <div className="career-img-container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ type: "keyframes", duration: 1 }}
              className="careerImg"
            ></motion.div>
            <h2
              //   Best
              //   CCTV
              //   and
              //   Intercom
              //   service
              //   provider
              //   in
              //   Navi
              //   Mumbai

              className="heading-secondary"
              style={{ color: "#00a0e3", textAlign: "center" }}
            >
              Our Service
            </h2>
            <div>
              {/* {myElementIsVisible && ( */}
              <InView threshold={0.25}>
                {({ ref, inView }) => (
                  <motion.p
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
                    className="career-info-text"
                  >
                    We’re building a culture at Incretech where amazing people
                    (like you) can do their best work. If you’re ready to grow
                    your career and help millions of organizations grow better,
                    you've come to the right place. Fill in the form given below
                    and attach the required documents.
                  </motion.p>
                )}
              </InView>
              {/* )} */}
            </div>
          </div>
        </main>
      </motion.section>
      <CareerContactForm setClick={setClick} setState={setState} />

      <Footer setClick={setClick} setState={setState} />
    </>
  );
};

export default Career;
