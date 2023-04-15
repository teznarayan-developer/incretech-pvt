import React from "react";
import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import laptop from "../assets/pc-laptop.jpg";
import cctv from "../assets/cctv.jpg";
import biometric from "../assets/biometric.jpg";
import intercom from "../assets/intercom.jpg";
import solar from "../assets/solar-energy.jpg";
import electric from "../assets/electric-services.jpg";
import msb from "../assets/mobile-signal-boosters.jpg";
import ac from "../assets/air-conditioner.jpg";
import wifi from "../assets/wifi.png";
import vdp from "../assets/video-door-phone.jpg";
import website from "../assets/website-development.jpg";
import application from "../assets/application-dev.jpg";
import marketing from "../assets/digital-marketing.jpg";
import hardware from "../assets/hardware.jpg";
import graphic from "../assets/graphic-design.png";
import "../components/Services.css";

const ServicesImage = ({ setClick, setState }) => {
  const closeSubmenu = () => {
    setState(false);
  };

 
  return (
    <main onMouseOver={closeSubmenu}>
      <div className="services-container" style={{ marginBottom: "2em" }}>
        {/* <div ref={myRefnew1}>
          {myElementIsVisiblenew1 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "10%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "10%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "10%" }
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
              <a href=""  className="services--1">
                <h3 className="heading-services">PC & Laptops</h3>
                <div className="card-img-container">
                  <img src={laptop} className="card-img" />
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech is a leading provider of PC and laptop assembling,
                    repairing, and reselling services.
                  </p>
                  <div className="content-overlay"></div>
                </div>
              </a>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div>
        // <div ref={myRefnew2}>
        //   {myElementIsVisiblenew2 && ( */}

        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "20%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "20%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "20%" }
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
              <Link to={`/cctv`} className="services--2">
                <h3 className="heading-services">CCTV</h3>
                <div className="card-img-container">
                  <img src={cctv} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech is a leading provider of CCTV installation
                    services for residential and commercial customers across the
                    India.
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div>
        // <div ref={myRefnew3}>
        //   {myElementIsVisiblenew3 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              // initial={{ opacity: 0, y: "9%" }}
              // animate={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 1, y: 0 }}
              // transition={{
              //   x: { type: "spring", stiffness: 300, damping: 300 },
              //   duration: 1,
              // }}
              ref={ref}
              initial={{ opacity: 0, y: "30%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "30%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "30%" }
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
              <Link to={`/biometric&AccessControl`} className="services--3">
                <h3 className="heading-services">Biometric & Access Control</h3>
                <div className="card-img-container">
                  <img src={biometric} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech is a leading provider of biometric and access
                    control installation services.
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div>
        // <div ref={myRefnew4}>
        //   {myElementIsVisiblenew4 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "10%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "10%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "10%" }
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
              <Link to={`/EPABX&Intercom`} className="services--4">
                <h3 className="heading-services">EPABX & Intercom</h3>
                <div className="card-img-container">
                  <img src={intercom} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech is an experienced provider of EPABX and Intercom
                    installation services.
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div>
        // <div ref={myRefnew5}>
        //   {myElementIsVisiblenew5 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "20%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "20%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "20%" }
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
              <Link to={`/networking`} className="services--5">
                <h3 className="heading-services">Networking</h3>
                <div className="card-img-container">
                  <img src={hardware} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    At Incretech Pvt. Ltd, we provide comprehensive networking
                    services to businesses of all sizes
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div>
        // <div ref={myRefnew6}>
        //   {myElementIsVisiblenew6 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "30%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "30%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "30%" }
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
              <Link to={`/Solar-Energy`} className="services--6">
                <h3 className="heading-services">Solar Energy</h3>
                <div className="card-img-container">
                  <img src={solar} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech is a company dedicated to providing the highest
                    quality solar installation services.
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div>
        // <div ref={myRefnew7}>
        //   {myElementIsVisiblenew7 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "10%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "10%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "10%" }
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
              <Link to={`/Electrical-Services`} className="services--7">
                <h3 className="heading-services">Electrical Services</h3>
                <div className="card-img-container">
                  <img src={electric} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech is a professional electrical services company
                    based in the India.
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div>
        // <div ref={myRefnew8}>
        //   {myElementIsVisiblenew8 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "20%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "20%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "20%" }
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
              <Link to={`/Mobile-Signal-Boosters`} className="services--8">
                <h3 className="heading-services">Mobile Signal Boosters</h3>
                <div className="card-img-container">
                  <img src={msb} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech is a leading provider of mobile signal boosters,
                    delivering innovative solutions to enhance wireless coverage
                    in homes, offices and vehicles.
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div>
        // <div ref={myRefnew9}>
        //   {myElementIsVisiblenew9 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "30%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "30%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "30%" }
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
              <Link to={`/Air-Conditioner`} className="services--9">
                <h3 className="heading-services">Air Conditioner</h3>
                <div className="card-img-container">
                  <img src={ac} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech is a leading air conditioning service provider. We
                    specialize in all aspects of air conditioning, from
                    installation and maintenance to repair and replacement.
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div>
        // <div ref={myRefnew10}>
        //   {myElementIsVisiblenew10 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "10%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "10%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "10%" }
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
              <Link to={`/WiFi-Extensions`} className="services--10">
                <h3 className="heading-services">Wi-Fi Extensions</h3>
                <div className="card-img-container">
                  <img src={wifi} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech is a company that provides Wifi Extension
                    services.
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div>
        // <div ref={myRefnew11}>
        //   {myElementIsVisiblenew11 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "20%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "20%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "20%" }
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
              <Link to={`/Video-Door-Phone`} className="services--11">
                <h3 className="heading-services">Video Door Phone</h3>
                <div className="card-img-container">
                  <img src={vdp} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech is an innovative technology company that provides
                    advanced Video Door Phone services to business and
                    residential customers.
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div>
        // <div ref={myRefnew12}>
        //   {myElementIsVisiblenew12 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "30%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "30%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "30%" }
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
              <Link to={`/Website-Development`} className="services--12">
                <h3 className="heading-services">Website Development</h3>
                <div className="card-img-container">
                  <img src={website} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech is a full-service web development agency dedicated
                    to providing innovative and creative web solutions that meet
                    the needs of our clients.
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div>
        // <div ref={myRefnew13}>
        //   {myElementIsVisiblenew13 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "10%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "10%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "10%" }
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
              <Link to={`/Application-Development`} className="services--13">
                <h3 className="heading-services">Application Development</h3>
                <div className="card-img-container">
                  <img src={application} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech is a leading application development services
                    provider specializing in Flutter and React Native
                    technologies.
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div>
        // <div ref={myRefnew14}>
        //   {myElementIsVisiblenew14 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "20%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "20%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "20%" }
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
              <Link to={`/Digital-Marketing`} className="services--14">
                <h3 className="heading-services">Digital Marketing</h3>
                <div className="card-img-container">
                  <img src={marketing} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech is a leading Digital Marketing company that offers
                    a wide range of services to help businesses reach their
                    goals.
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* //   )}
        // </div> */}

        {/* <div ref={myRefnew15}>
          {myElementIsVisiblenew15 && ( */}
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: "30%" }}
              animate={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "30%" }
              }
              exit={
                inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: "30%" }
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
              <Link to={`/Graphic-Design`} className="services--15">
                <h3 className="heading-services">Graphic Development</h3>
                <div className="card-img-container">
                  <img src={graphic} className="card-img" />
                  <div className="content-overlay"></div>
                  <p className="text-services" style={{ fontSize: ".8rem" }}>
                    Incretech Pvt. Ltd. offers professional graphic design
                    services that can help businesses stand out in the digital
                    age.
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </InView>
        {/* )}
        </div> */}
      </div>
    </main>
  );
};

export default ServicesImage;
