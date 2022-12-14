import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact_me_container">
      <p className="contact_title">CONTACT ME</p>
      <form className="form">
        <div className="mb-3">
          <input
            type="email"
            className="email active"
            placeholder="Email address"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-name active"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-message active"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
