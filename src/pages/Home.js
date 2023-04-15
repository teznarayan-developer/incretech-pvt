import { useInView } from "react-intersection-observer";
import React from "react";
import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import Services from "../components/Services.js";
import Process from "../components/Process.js";
import ChooseUs from "../components/ChooseUs.js";
import Testimonial from "../components/Testimonial.js";
import Footer from "../components/Footer.js";

function Home({ setClick, state, click, setState }) {
  return (
    <React.Fragment>
      <Header
        setClick={setClick}
        click={click}
        state={state}
        setState={setState}
      />
      <Hero
        setClick={setClick}
        click={click}
        state={state}
        setState={setState}
      />
      <Services
        setClick={setClick}
        click={click}
        state={state}
        setState={setState}
      />
      <ChooseUs
        setClick={setClick}
        click={click}
        state={state}
        setState={setState}
      />
      <Process
        setClick={setClick}
        click={click}
        state={state}
        setState={setState}
      />
      <Testimonial
        setClick={setClick}
        click={click}
        state={state}
        setState={setState}
      />
      <Footer
        setClick={setClick}
        click={click}
        state={state}
        setState={setState}
      />
    </React.Fragment>
  );
}

export default Home;
