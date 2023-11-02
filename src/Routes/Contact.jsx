import React, { useState } from "react";
import "../globalStyle.css";
import Message from "../Assets/message.svg";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xqkvjawa");
  if (state.succeeded) {
    
    Swal.fire(
      "Message sent successfully",
      "we will get back to you as soon as posible",
      "success"
    );

 
    
    // return <p>Thanks for joining!</p>;
  } 
 

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
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <input
                      id="message"
                      name="message"
                      type="text"
                      placeholder="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <button className="sendBtn float-right mt-5">Send</button>
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
