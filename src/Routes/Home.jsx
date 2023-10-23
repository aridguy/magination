import React from "react";
import Navbar from "../Components/Navbar";
import Hand from "../Assets/hello-hand.svg";
import DarePics from "../Assets/mainImage.svg";
import Projects from "../Components/Projects";
import Career from "../Components/Career";
import Contact from "../Routes/Contact";

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
                  I’m a Product & brand designer <strong>Passionate</strong>{" "}
                  about <strong>Creativity</strong> in Product with over 4years
                  of <strong>Experience</strong> in experiential now, I enjoy
                  using my <strong>diverse design background</strong> to helped
                  build up upcoming brands and create meaningful and{" "}
                  <strong>memorable</strong>
                  user-centered solutions that develop intuition between
                  technology and people.
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
    </div>
  );
};

export default Home;
