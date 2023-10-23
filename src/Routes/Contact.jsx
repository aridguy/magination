import React from "react";
import "../globalStyle.css";
import Message from "../Assets/message.svg";

const Contact = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row mt-5 pt-5 mb-5">
            <div className="col-md-6">
              <div className="d-flex gap-2">
                <span className="contactText text-white">
                  Want to <br /> Get in <br /> touch?
                </span>
                <img src={Message} alt="message-icon" />
              </div>
              <span className="text-white">
                I am not open to a new role at the moment, <br /> Please,
                <strong>reach out</strong> if you will like to view any of{" "}
                <br />
                these projects.
              </span>
            </div>
            <div className="col-md-6">
              <div>
                <form>
                  <div>
                    <input type="text" placeholder="your name" />
                  </div>
                  <div>
                    <input type="text" placeholder="your name" />
                  </div>
                  <div>
                    <input type="text" placeholder="your name" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
