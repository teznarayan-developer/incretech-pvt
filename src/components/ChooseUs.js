import React from "react";
import StartupLogo from "./StartupLogo";
import "../components/ChooseUs.css";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ChooseUs = () => {
  // const { ref: myRefnew1, inView: myElementIsVisiblenew1 } = useInView();
  // const { ref: myRefnew2, inView: myElementIsVisiblenew2 } = useInView();
  // const { ref: myRefnew3, inView: myElementIsVisiblenew3 } = useInView();
  // const { ref: myRefnew4, inView: myElementIsVisiblenew4 } = useInView();
  // const { ref: myRefnew5, inView: myElementIsVisiblenew5 } = useInView();
  // const { ref: myRefnew6, inView: myElementIsVisiblenew6 } = useInView();
  // const { ref: myRefnew7, inView: myElementIsVisiblenew7 } = useInView();
  // const { ref: myRefnew8, inView: myElementIsVisiblenew8 } = useInView();
  // const { ref: myRefnew9, inView: myElementIsVisiblenew9 } = useInView();
  // const { ref: myRefnew10, inView: myElementIsVisiblenew10 } = useInView();

  return (
    <section className="choose-us-section">
      <main className="container">
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
          className="heading-secondary"
          style={{ color: "#000", textAlign: "left" }}
        >
          Why choose us?
        </h2>
        <div className="choose-us-cards">
          {/* <div ref={myRefnew1}>
            {myElementIsVisiblenew1 && ( */}
          <InView threshold={0.25}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                exit={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
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
                className="card-1"
              >
                <p
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
                  }}
                >
                  WE PROVIDE FULL CONSULTATION
                </p>
              </motion.div>
            )}
          </InView>
          {/* )}
          </div>
          <div ref={myRefnew2}>
            {myElementIsVisiblenew2 && ( */}
          <InView threshold={0.25}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                exit={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
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
                className="card-2"
              >
                <p>WE VALUE OUR CLIENT</p>
              </motion.div>
            )}
          </InView>
          {/* )}
          </div>
          <div ref={myRefnew3}>
            {myElementIsVisiblenew3 && ( */}
          <InView threshold={0.25}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                exit={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
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
                className="card-3"
              >
                <p>WE HAVE A TRACK RECORD OF SUCCESS</p>
              </motion.div>
            )}
          </InView>
          {/* )}
          </div>
          <div ref={myRefnew4}>
            {myElementIsVisiblenew4 && ( */}
          <InView threshold={0.25}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                exit={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
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
                className="card-4"
              >
                <p>WE MEET DEADLINES</p>
              </motion.div>
            )}
          </InView>
          {/* )}
          </div>
          <div ref={myRefnew5}>
            {myElementIsVisiblenew5 && ( */}
          <InView threshold={0.25}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                exit={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
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
                className="card-5"
              >
                <p>WE KNOW DIGITAL</p>
              </motion.div>
            )}
          </InView>
          {/* )}
          </div>
          <div ref={myRefnew6}>
            {myElementIsVisiblenew6 && ( */}
          <InView threshold={0.25}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                exit={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
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
                className="card-6"
              >
                <p>WE DON'T COST EARTH</p>
              </motion.div>
            )}
          </InView>
          {/* )}
          </div>
          <div ref={myRefnew7}>
            {myElementIsVisiblenew7 && ( */}
          <InView threshold={0.25}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                exit={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
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
                className="card-7"
              >
                <p>WE UNDERSTAND YOUR BRAND</p>
              </motion.div>
            )}
          </InView>
          {/* )}
          </div>
          <div ref={myRefnew8}>
            {myElementIsVisiblenew8 && ( */}
          <InView threshold={0.25}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                exit={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
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
                className="card-8"
              >
                <p>WE'RE EASY TO WORK WITH</p>
              </motion.div>
            )}
          </InView>
          {/* )}
          </div>
          <div ref={myRefnew9}>
            {myElementIsVisiblenew9 && ( */}
          <InView threshold={0.25}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                exit={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
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
                className="card-9"
              >
                <p>WE FOCUS ON RESULTS</p>
              </motion.div>
            )}
          </InView>
          {/* )}
          </div>
          <div ref={myRefnew10}>
            {myElementIsVisiblenew10 && ( */}
          <InView threshold={0.25}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                exit={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
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
                className="card-10"
              >
                <p>WE HAVE PROFESSIONAL EMPLOYEES</p>
              </motion.div>
            )}
          </InView>
          {/* )}
          </div> */}
        </div>
        <StartupLogo />
      </main>
    </section>
  );
};

export default ChooseUs;
