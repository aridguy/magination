import React from "react";
import "../globalStyle.css";

const Career = () => {
  return (
    <div>
      <section className="bg-light careerPlaceBg pt-2 pb-5">
        <div className="container ">
          <div className="row mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-2">
              <span className="black career">Career</span>
            </div>
            <div className="col-md-8"></div>
            <div className="col-md-1">
              <div>
                <a className="brand resume-button mt-4" href="/">
                  Get Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <span className="pusheat-txt black">Pusheat</span> <br />
              <span className="pe-title">Product Designer</span> <br />
              <span className="date-work">JUL 2023 - Present</span>
            </div>
            <div className="col-md-3">
              <span className="pusheat-txt black">Capitol Lion</span> <br />
              <span className="pe-title">Product Designer (Web.3)</span> <br />
              <span className="date-work">Nov 2023 - 2023</span>
            </div>
            <div className="col-md-2">
              <span className="pusheat-txt black">WDC</span> <br />
              <span className="pe-title">Design Instructor </span> <br />
              <span className="date-work">Sept 2021 - Present</span>
            </div>
            <div className="col-md-2">
              <span className="pusheat-txt black">Whitecanvas</span> <br />
              <span className="pe-title">Brand Designer </span> <br />
              <span className="date-work">MAY - DEC 2018</span>
            </div>
            <div className="col-md-3">
            <span className="pusheat-txt black">Imaginnarium</span> <br />
            <span className="pe-title">Graphics Designer</span> <br />
            <span className="date-work">NOV - DEC 2015</span>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
