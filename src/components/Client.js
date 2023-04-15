import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import wipro from "../assets/wipro.png";
import zaika from "../assets/zaika.png";
import gem from "../assets/GEM-carousel.png";
import tunga from "../assets/tunga.png";
import startup from "../assets/startup-india.png";
import oyo from "../assets/OYO.png";
import monarch from "../assets/Monarch-Group.png";
import fabHotel from "../assets/fab-hotels.png";
import "../components/Client.css";

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    // pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <div style={{ marginTop: "3em" }}>
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
        style={{ color: "#000" }}
        // style={{ color: "#08a3e4", textAlign: "left" }}
      >
        Our clients
      </h2>
      <Slider {...settings}>
        <div>
          <img src={wipro} className="carousel-img" />
        </div>
        <div>
          <img src={zaika} className="carousel-img" />
        </div>

        <div>
          <img src={tunga} className="carousel-img" />
        </div>

        <div>
          <img src={oyo} className="carousel-img" />
        </div>
        <div>
          <img src={monarch} className="carousel-img" />
        </div>
        <div>
          <img src={fabHotel} className="carousel-img" />
        </div>
      </Slider>
    </div>
  );
};

export default Client;
