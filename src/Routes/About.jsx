import React from "react";
import Navbar from "../Components/Navbar";
import aboutImage from "../Assets/image-about.png";
import Career from "../Components/Career";
import Contact from "./Contact";
// import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="aboutme mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text-middle ">
                <p className="uppercase text-white fw-bolder fs-1">About Me</p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div>
                <img width="60%" src={aboutImage} alt="about-pics" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <p className="text-white fs-5">
              Greetings! I am Olorunfemi Damilare, and I possess a strong
              passion for nurturing creativity in the realms of product and
              brand development. With an extensive background encompassing over
              four years of experience in experiential design, brand strategy,
              and UX design, I have been actively involved in the growth of
              brands and the creation of impactful, visually appealing design
              solutions that leave a lasting impression on users. At present, I
              am engaged with a governmental agency known as WAPA, where I focus
              on equipping women with valuable tech skills. My role primarily
              involves training women in desktop proficiency, graphics design,
              and UI design. The training is organized into batches to
              accommodate a diverse range of students. While my primary role is
              that of a UI designer, I occasionally take on the role of a design
              enthusiast who seeks to optimize product functionality and
              encourage user engagement. Hence, you can refer to me as a remote
              UXUI designer. I have a genuine passion for my work and am not
              hesitant to immerse myself in the details to ensure the best
              possible outcomes. 😊
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <Career />
      <Contact />
      {
        <section className="inner-footer bg-grey">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
              <div className="white text-center">
                <a href="https://twitter.com/iamoludarey"><i className="fab fa-twitter i cursor"></i></a>
                <a href="https://www.tiktok.com/@iamoludarey"><i className="fab fa-tiktok i"></i></a>
               <a href="https://www.linkedin.com/in/olorunfemi-damilare/"> <i className="fab fa-linkedin-in i"></i></a>
                <a href="https://www.figma.com/@iamoludarey"><i className="fab fa-figma i"></i></a>
                <a href="https://www.instagram.com/iamoludarey/"><i className="fab fa-instagram i"></i></a>
                <a href="https://www.behance.net/iamoludarey"><i className="fab fa-behance i"></i></a>
                 <a href="https://dribbble.com/iamoludarey"><i className="fab fa-dribbble i"></i></a>
              </div>
              <div>
                <span className="white">
                  All Rights Reserved. made with{" "}
                  <i className="red fas fa-heart"></i> @iamoludarey
                </span>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
      }
    </div>
  );
};

export default About;
