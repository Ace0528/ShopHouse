import React, { useEffect, useRef, useState } from "react";
import { PageSection } from "../../components/PageSection/PageSection";
import "./ContactPage.css";

export default function ContactPage() {
  const [contact, setContact] = useState({
    contact_name: "",
    contact_email: "",
    contact_message: "",
  });

  const formHasError = useRef(false);
  const initFormErrorMsgs = {
    name: "",
    email: "",
    message: "",
    done: "",
  };
  const [formError, setFormError] = useState(initFormErrorMsgs);
  const handleInputChange = (e) => {
    const newContact = { ...contact, [e.target.name]: e.target.value };
    setContact(newContact);
  };

  const validate = () => {
    formHasError.current = false;
    const errorMsgs = { ...initFormErrorMsgs };

    if (contact.contact_name.trim().length === 0) {
      errorMsgs.name = "Please enter name";
      formHasError.current = true;
    }

    if (contact.contact_email.trim().length === 0) {
      errorMsgs.email = "Please enter email";
      formHasError.current = true;
    }

    if (contact.contact_message.trim().length === 0) {
      errorMsgs.message = "Please enter message";
      formHasError.current = true;
    }
    if (
      contact.contact_name &&
      contact.contact_email &&
      contact.contact_message
    ) {
      errorMsgs.done = "Your message has been received, Thank You.";
      formHasError.current = true;
    }
    if (errorMsgs.done) {
      contact.contact_name = "";
      contact.contact_email = "";
      contact.contact_message = "";
    }
    setFormError({ ...errorMsgs });
  };
  const handleFormSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    validate();
    if (formHasError.current) {
      return;
    }
  };

  return (
    <div>
      <PageSection>
        <div className="contact-page-mobile">
          <div>
            <label className="category"> Fullname </label>
            <span className="inp-error">{formError.name}</span>
            <br />
            <input
              className="contact-input product-description "
              type={"text"}
              onChange={(e) => handleInputChange(e)}
              placeholder="James Doe"
              name="contact_name"
              value={contact.contact_name}
            />
          </div>
          <div>
            <label className="category"> Email </label>
            <span className="inp-error">{formError.email}</span>
            <br />
            <input
              className="contact-input product-description email "
              type={"email"}
              onChange={(e) => handleInputChange(e)}
              placeholder="jamesdoe@gmail.com"
              name="contact_email"
              value={contact.contact_email}
            />
          </div>
          <div>
            <label className="category"> Message </label>
            <span className="inp-error">{formError.message}</span>
            <br />
            <textarea
              className="text-area contact-input "
              cols="10"
              rows="10"
              onChange={(e) => handleInputChange(e)}
              placeholder="Type your message"
              name="contact_message"
              value={contact.contact_message}
            />
          </div>
          <div className="inp-done ">{formError.done}</div>
          <button
            className="checkOut-btn product-description btn-width"
            onClick={(e) => handleFormSubmit(e)}
          >
            SEND
          </button>
        </div>
      </PageSection>
    </div>
  );
}
