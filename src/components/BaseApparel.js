import { useFormik } from "formik";
import { useState } from "react";

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please provide a email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please provide a valid email";
  }

  return errors;
};
export function BaseApparel() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: values => {
      setIsSubmitted(true);
    },
  });

  return (
    <div className="card">
      <div className="left">
        <img
          className="logo-image"
          src="./images/logo.svg"
          alt="base apparel logo"
        />
        <img
          className="hero-mobile"
          src="./images/hero-mobile.jpg"
          alt="hero mobile"
        />
        <div className="content">
          <h2 className="title">
            <span>WE'RE</span>
            <span>COMING</span>
            <span>SOON</span>
          </h2>
          <p className="description">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="submit">
              <input
                className={`input-email ${
                  formik.errors.email ? "input-error" : ""
                }`}
                type="text"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email Address"
              />
              {formik.touched.email && formik.errors.email ? (
                <img
                  className="error-icon"
                  src="./images/icon-error.svg"
                  alt="error icon"
                />
              ) : null}
              <button className="btn-submit" type="submit">
                <img
                  className="arrow-image"
                  src="./images/icon-arrow.svg"
                  alt="arrow submit"
                />
              </button>
            </div>
          </form>
          {formik.touched.email && formik.errors.email ? (
            <span className="error-message">{formik.errors.email}</span>
          ) : null}
          {isSubmitted && !formik.errors.email && (
            <span className="valid-message">
              Thank you for subscribing to our newsletter!
            </span>
          )}
        </div>
      </div>
      <img
        className="hero-image"
        src="./images/hero-desktop.jpg"
        alt="hero desktop"
      />
    </div>
  );
}
