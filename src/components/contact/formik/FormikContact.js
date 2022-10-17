import { useState, useRef } from "react";
import "./FormikContact.scss";
import emailjs from "@emailjs/browser";

function FormikContact() {
  const [response, setResponse] = useState("");
  const [responseFromServer, setResponseFromServer] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dgoifxv",
        "template_jyjc72a",
        form.current,
        "Lad-679F1uZ9I10Gd"
      )
      .then(
        () => {
          setResponseFromServer("success");
          setResponse("Your message has been sent succesfully!");
          const timerId = setTimeout(() => {
            setResponseFromServer("");
            setResponse("");
          }, 3000);
          return () => clearInterval(timerId);
        },
        (error) => {
          setResponseFromServer("error");
          setResponse(`Something went wrong! ${error.text}`);
          const timerId = setTimeout(() => {
            setResponseFromServer("");
            setResponse("");
          }, 3000);
          return () => clearInterval(timerId);
        }
      );
  };
  //
  return (
    <div className="formik_wrapper">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <h2
          style={
            responseFromServer === "success"
              ? { color: "green" }
              : responseFromServer === "error"
              ? { color: "red" }
              : null
          }
        >
          {response === "" ? "Message me" : response}
        </h2>

        <div className="formik_name_email">
          <div className="form_field">
            <input
              required
              name="user_name"
              type="text"
              placeholder="Full name"
            />
          </div>

          <div className="form_field">
            <input
              required
              name="user_email"
              type="email"
              placeholder="Email address"
            />
          </div>
        </div>

        <div className="form_field">
          <input required name="subject" type="subject" placeholder="Subject" />
        </div>
        <div className="form_field ">
          <textarea
            required
            name="message"
            placeholder="Enter your message here..."
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormikContact;
