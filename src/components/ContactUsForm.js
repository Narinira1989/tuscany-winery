import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUsForm = () => {
  const form = useRef();
  const [warningMessage, setWarningMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const formData = new FormData(form.current);
    const fields = ["user_name", "user_email", "message"];

    for (const field of fields) {
      if (!formData.get(field)) {
        setWarningMessage("Please fill in all fields");
        return false;
      }
    }

    setWarningMessage("");
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_39qb3m4",
        "template_voqdp5j",
        form.current,
        "2Vr6V-JhY3ULTrumd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("The message was successfully sent!");
          form.current.reset();
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Your name" required />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Your email address"
          required
        />
        <label>Message</label>
        <textarea name="message" placeholder="Type your message" required />
        <input type="submit" value="Send" />
      </form>
      {warningMessage && <p className="warning-message">{warningMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default ContactUsForm;
