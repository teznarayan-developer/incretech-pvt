import React, { useState, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SubMenu from "./components/Submenu";

import TermsAndConditions from "./pages/TermsAndContions.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorBoundary";
const HomeSection = React.lazy(() => import("./pages/Home"));
const PClaptop = React.lazy(() => import("./services/PClaptop"));

const CCTV = React.lazy(() => import("./services/CCTV.js"));
const Biometric = React.lazy(() => import("./services/Biometric"));
const EPABX = React.lazy(() => import("./services/EPABX"));
const Networking = React.lazy(() => import("./services/Networking"));
const SolarEnergy = React.lazy(() => import("./services/SolarEnergy"));
const ElectricServices = React.lazy(() => import("./services/Electrical"));
const MobileSignalBooster = React.lazy(() =>
  import("./services/MobileSIgnalBooster")
);
const AirConditioner = React.lazy(() => import("./services/AirConditioner"));
const WiFi = React.lazy(() => import("./services/Wifi"));
const VideoDoorPhone = React.lazy(() => import("./services/VideoDoorPhone"));
const WebsiteDevelopment = React.lazy(() => import("./services/WebsiteDev"));
const ApplicationDevelopment = React.lazy(() =>
  import("./services/ApplicationDev")
);
const DigitalMarkerting = React.lazy(() =>
  import("./services/DigitalMarketing")
);
const GraphicDevelopment = React.lazy(() => import("./services/GraphicDev"));

const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact.js"));
const Career = React.lazy(() => import("./components/Career"));

function App() {
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);
  const [state, setState] = useState(false);

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-item")) {
      setState(false);
    }
  };

  return (
    <AnimatePresence>
      <Router>
        <div className="App">
          {state && (
            <SubMenu
              setClick={setClick}
              click={click}
              state={state}
              setState={setState}
            />
          )}
          {click && <Sidebar setClick={setClick} click={click} state={state} />}
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <HomeSection setState={setState} setClick={setClick} />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/pc&laptop"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <PClaptop setState={setState} setClick={setClick} />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/cctv"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <CCTV setState={setState} setClick={setClick} />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/biometric&AccessControl"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <Biometric setState={setState} setClick={setClick} />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/EPABX&Intercom"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <EPABX setState={setState} setClick={setClick} />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/networking"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <Networking setState={setState} setClick={setClick} />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/Solar-Energy"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <SolarEnergy setState={setState} setClick={setClick} />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/Electrical-Services"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <ElectricServices setState={setState} setClick={setClick} />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/Mobile-Signal-Boosters"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <MobileSignalBooster
                      setState={setState}
                      setClick={setClick}
                    />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/Air-Conditioner"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <AirConditioner setState={setState} setClick={setClick} />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/WiFi-Extensions"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <WiFi setState={setState} setClick={setClick} />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/Video-Door-Phone"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <VideoDoorPhone
                      setClick={setClick}
                      click={click}
                      state={state}
                      setState={setState}
                    />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/Website-Development"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <WebsiteDevelopment
                      setClick={setClick}
                      click={click}
                      state={state}
                      setState={setState}
                    />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/Application-Development"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <ApplicationDevelopment
                      setClick={setClick}
                      click={click}
                      state={state}
                      setState={setState}
                    />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/Digital-Marketing"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <DigitalMarkerting
                      setClick={setClick}
                      click={click}
                      state={state}
                      setState={setState}
                    />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/Graphic-Design"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <GraphicDevelopment
                      setClick={setClick}
                      click={click}
                      state={state}
                      setState={setState}
                    />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/about"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <About
                      setClick={setClick}
                      click={click}
                      state={state}
                      setState={setState}
                    />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/career"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <Career
                      setClick={setClick}
                      click={click}
                      state={state}
                      setState={setState}
                    />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/contact"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                  }}
                >
                  <Suspense
                    fallback={
                      <div className="preloader">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <Contact
                      setClick={setClick}
                      click={click}
                      state={state}
                      setState={setState}
                    />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/privacy-policy"
              element={
                <PrivacyPolicy
                  setClick={setClick}
                  click={click}
                  state={state}
                  setState={setState}
                />
              }
            />

            <Route
              path="/terms-and-conditions"
              element={
                <TermsAndConditions
                  setClick={setClick}
                  click={click}
                  state={state}
                  setState={setState}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;
