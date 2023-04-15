import React from "react";
import msme from "../assets/MSME.png";
import gem from "../assets/GEM.png";
import startupIndia from "../assets/startup-india.png";

const StartupLogo = () => {
  return (
    <section className="startup-container">
      <img src={msme} className="startup-logo" />
      <img src={gem} className="startup-logo" />
      <img src={startupIndia} className="startup-logo" />
    </section>
  );
};

export default StartupLogo;
