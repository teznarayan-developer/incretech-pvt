import React from "react";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../components/Process.css";
import Client from "./Client";
const Process = () => {
  const {
    ref: myRefprocess,
    inView: myElementIsVisibleprocess,
    entry,
  } = useInView();
  return (
    <section>
      <main className="container">
        <div className="process">
          <h2
            Best
            CCTV
            and
            Intercom
            service
            provider
            in
            Navi
            Mumbai
            className="heading-tertiary"
            style={{ color: "#0e1318" }}
          >
            Our Process
          </h2>

          <div className="process-container">
            {/* {myElementIsVisibleprocess && ( */}
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
                  className="process--1"
                >
                  <h3
                    style={{
                      marginBottom: ".3em",
                      color: "#000",
                    }}
                  >
                    {" "}
                    What we focus on
                  </h3>
                  <p className="text">
                    We focus on Delivering customer requirements on time/ before
                    which becomes our service provider more powerful.
                  </p>
                </motion.div>
              )}
            </InView>
            {/* )}
            {myElementIsVisibleprocess && ( */}
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
                  className="process--2"
                >
                  <h3
                    style={{
                      marginBottom: ".3em",
                      color: "#000",
                    }}
                  >
                    {" "}
                    What we delivered?
                  </h3>
                  <p className="text">
                    CCTVs, Computer, Centralised WIFI, Biometric Machine, EPBX &
                    Intercom, Mobile signal boosters, electric work, solar
                    systems, air conditioners services, Web Development, Mobile
                    App Development , Graphic Designing,.
                  </p>
                </motion.div>
              )}
            </InView>
            {/* )}
            {myElementIsVisibleprocess && ( */}
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
                  className="process--3"
                >
                  <h3
                    style={{
                      marginBottom: ".3em",
                      color: "#000",
                    }}
                  >
                    How deal with B2B & B2C
                  </h3>
                  <p className="text">
                    B2B (also known as business-to-business) marketing focuses
                    on logical process-driven purchasing decisions, while B2C
                    (also known as business-to-consumer) marketing focuses on
                    emotion-driven purchasing decisions.
                  </p>
                </motion.div>
              )}
            </InView>
            {/* )} */}
          </div>
        </div>

        <Client />
      </main>
    </section>
  );
};

export default Process;
