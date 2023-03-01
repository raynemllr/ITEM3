import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { calculateAge } from "../../utils";

import styles from "./Form.module.css";

const Form = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    gender: "",
    birthdate: "",
    message: "",
    termsAndCondition: false,
  });

  const handleChange = (e) => {
    const { id, value, checked } = e.target;
    setValues({ ...values, [id]: value });

    if (id === "termsAndCondition") {
      setValues({ ...values, [id]: checked });
    }

    if (id === "birthdate") {
      setValues({ ...values, [id]: value });

      const age = calculateAge(e.target.value);

      if (age < 18) {
        alert("You must 18 years old at least to register.");

        setValues({ ...values, birthdate: "" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/displaycontent", { state: values });
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <Field
        id="firstName"
        label="First Name"
        placeholder="Rayne"
        required
        value={values["firstName"]}
        onChange={handleChange}
      />
      <Field
        id="lastName"
        label="Last Name"
        placeholder="Mallari"
        required
        value={values["lastName"]}
        onChange={handleChange}
      />
      <Field
        id="mobileNumber"
        type="tel"
        label="Mobile Number"
        placeholder="09123456789"
        required
        value={values["mobileNumber"]}
        onChange={handleChange}
        pattern="^(09|\+639)\d{9}$"
      />
      <small>sample format: 09... / +63</small>
      <div className={styles.row}>
        <Field
          id="gender"
          element="select"
          label="Gender"
          required
          value={values["gender"]}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </Field>

        <Field
          id="birthdate"
          type="date"
          label="Birthdate"
          required
          value={values["birthdate"]}
          onChange={handleChange}
        />
      </div>

      <Field
        id="message"
        element="textarea"
        label="Message"
        required
        value={values["message"]}
        onChange={handleChange}
      />
      <Field
        id="termsAndCondition"
        type="checkbox"
        required
        value={values["termsAndCondition"]}
        onChange={handleChange}
      >
        {" "}
        <span>
          I agree to the<a href="#"> Terms and Conditions</a>
        </span>
      </Field>

      <button>Submit</button>
    </form>
  );
};

const Field = ({ children, ...props }) => {
  const { id, label, type = "text", element, grow, onChange } = props;
  const Input = element ? element : "input";

  return (
    <div className={styles.field} style={{ "--grow": grow }}>
      {type === "checkbox" ? (
        <>
          <Input id={id} type={type} {...props} onChange={onChange} />
          {children}
        </>
      ) : (
        <>
          <label htmlFor={id}>{label}</label>
          <Input id={id} type={type} {...props} onChange={onChange}>
            {children}
          </Input>
        </>
      )}
    </div>
  );
};

export default Form;
