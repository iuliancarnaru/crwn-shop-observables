import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProsp }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProsp} />
    {label ? (
      <label
        className={`${
          otherProsp.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
