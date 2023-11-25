import React from "react";
import Booth from "../Assets/booth.png";
import "../globalStyle.css";
import Guiter from "../Assets/guitar.png";
import Cafes from "../Assets/cybercafe.png";


const Footer = () => {



    


  return (
    <div>
      <section className="bg-black pt-5 pb-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="text-white">
                <span className="footprevious">Previous Life</span> <br />
                <span className="txt-extra text-muted">
                  I used to do some things that not all time i do
                </span>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div>
                <img src={Booth} alt="photobooth" /> <br />
                <span className="text-booth">Photo Booth</span>
              </div>
              <div>
                <span>
                  During my design journey, I possess expertise in photography,
                  with the capability to edit images and craft various templates
                  for special occasions such as birthdays, weddings, and
                  celebrations. In this role, my primary responsibility involved
                  designing templates for events where individuals would have
                  their pictures taken within a designated booth
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src={Cafes} alt="cyber cafe" /> <br />
                <span className="text-booth">Cybercafé</span>
              </div>
              <div>
                <span>
                  I served as a café attendant in the early part of 2009,
                  assisting individuals who sought internet access for purposes
                  such as checking their online exams, documents, emails, and
                  engaging with social media platforms.
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src={Guiter} alt="photobooth" /> <br />
                <span className="text-booth">Guitarist</span>
              </div>
              <div>
                <span>
                  My early fascination with music ignited a natural talent for
                  playing instruments, and my musical journey commenced with a
                  drum set. Learning to play the drums was initially challenging
                  because there were no experienced players in my church to
                  guide me, but I persevered and gradually honed my skills
                  through trial and error. Eventually, my passion for music
                  expanded, and I developed a deep affection for playing the
                  guitar.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Footer;
