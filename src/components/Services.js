import React from "react";
import { useInView, InView } from "react-intersection-observer";
import ServicesImage from "./ServicesImage";
import "../components/Services.css";
import { motion } from "framer-motion";

const Services = ({ setClick, state, click, setState }) => {
  const closeSubmenu = () => {
    setState(false);
  };

  const {
    ref: myRef,
    inView: myElementIsVisible,
    entry,
  } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <section
      id="services"
      className="container services-img-container"
      onMouseOver={closeSubmenu}
    >
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
        style={{ color: "#0e1318", textAlign: "left" }}
      >
        Our Service
      </h2>

      <ServicesImage setClick={setClick} setState={setState} />

      <div className="service-process-container">
        <div className="how-is-it" style={{ overflow: "hidden" }}>
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
            How is our services?
          </h2>

          {/* {myElementIsVisible && ( */}
          <InView>
            {({ ref, inView }) => (
              <motion.p
                ref={ref}
                className="text"
                initial={{ opacity: 0, y: "10%" }}
                animate={
                  inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }
                }
                exit={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }}
                transition={{ type: "keyframes", duration: 0.3 }}
              >
                Delivering excellent customer service is one of the company
                values. Our purpose is modest: to live and deliver WOW. Our team
                provides professional and high-quality customer services. We
                listen to customers that results in an indebted and fulfilled
                customer, it can also go a long way in terms of keeping yourself
                on their radar for future business. We think long term when
                dealing with customers.We believe that by keeping customers.
              </motion.p>
            )}
          </InView>

          {/* )} */}
        </div>
      </div>
    </section>
  );
};

export default Services;
