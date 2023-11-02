import React from "react";
import Navbar from "../Components/Navbar";
import Hand from "../Assets/hello-hand.svg";
import DarePics from "../Assets/mainImage.svg";
import Projects from "../Components/Projects";
import Career from "../Components/Career";
import Contact from "../Routes/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="p-top-content">
                <small className="hand">
                  Hello <img width="2.4%" src={Hand} alt="hand-hello" />
                </small>
              </div>
              <div>
                <span className="p-name text-white">
                  i’m{" "}
                  <span className="brand animated-gradient">Olorunfemi</span>{" "}
                  Damilare{" "}
                </span>
                <span className="text-white p-name-title">
                  Product | Brand | Educator
                </span>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div>
                <img
                  className="responsive"
                  width="100%"
                  src={DarePics}
                  alt="dare-pictures"
                />
              </div>
              <div className="text-white text-center mt-5">
                <span className="about-txt">
                  I’m a product and brand designer with a strong passion for
                  fostering creativity in product design. With more than four
                  years of experience in the field of experiential design, I
                  find fulfillment in leveraging my extensive design expertise
                  to contribute to the growth of emerging brands. My goal is to
                  craft purposeful and memorable user-centric solutions that
                  establish a seamless connection between technology and people.
                </span>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      <Projects />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
