import { useState } from "react";
import "./FormikContact.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHttp } from "../../../hooks/http.hook";
import { nanoid } from "@reduxjs/toolkit";
function FormikContact() {
  const [responseFromServer, setResponseFromServer] = useState("");
  const [responseStatus, setResponseStatus] = useState("idle");
  const { request } = useHttp();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Please enter your full name...")
        .required("Required!"),
      email: Yup.string().email("Wrong email address...").required("Required!"),
      subject: Yup.string().required("Please enter the subject!"),
      message: Yup.string()
        .min(5, "Your message must be more than 10 letters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      const newMessage = {
        id: nanoid(),
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      };
      request(
        "http://localhost:3001/messages",
        "POST",
        JSON.stringify(newMessage)
      )
        .then(() => {
          setResponseFromServer("Yor message has been sent succesfully!");
          setResponseStatus("success");
          const timerId = setTimeout(() => {
            setResponseStatus("idle");
            setResponseFromServer("");
            console.log("back to norm");
          }, 3000);
          return () => {
            clearInterval(timerId);
          };
        })
        .catch((error) => {
          setResponseFromServer(error.message);
          setResponseStatus("error");
        });
      formik.resetForm();
    },
  });

  return (
    <div className="formik_wrapper">
      <form className="form" onSubmit={formik.handleSubmit}>
        <h2
          style={
            responseStatus === "success"
              ? { color: "green" }
              : responseStatus === "error"
              ? { color: "red" }
              : null
          }
        >
          {responseFromServer === "" ? "Message me" : responseFromServer}
        </h2>
        <div className="formik_name_email">
          <div className="form_field">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full name"
              {...formik.getFieldProps("name")}
              style={
                formik.errors.name && formik.touched.name
                  ? { borderColor: "red" }
                  : null
              }
            />
            {/* {formik.errors.name} */}
            {formik.errors.name && formik.touched.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="form_field">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              {...formik.getFieldProps("email")}
              style={
                formik.errors.email && formik.touched.email
                  ? { borderColor: "red" }
                  : null
              }
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className="form_field">
          <input
            id="subject"
            name="subject"
            type="subject"
            placeholder="Subject"
            {...formik.getFieldProps("subject")}
            style={
              formik.errors.subject && formik.touched.subject
                ? { borderColor: "red" }
                : null
            }
          />
          {formik.errors.subject && formik.touched.subject ? (
            <div className="error">{formik.errors.subject}</div>
          ) : null}
        </div>
        <div className="form_field ">
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message here..."
            {...formik.getFieldProps("message")}
            style={
              formik.errors.message && formik.touched.message
                ? { borderColor: "red" }
                : null
            }
          />
          {formik.errors.message && formik.touched.message ? (
            <div className="error message_error">{formik.errors.message}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormikContact;
