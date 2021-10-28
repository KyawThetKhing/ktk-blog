import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError/TextError";

function RadioGroup({ name, label, options, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>

      <Field name={name} {...rest} className="radio-options">
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default RadioGroup;
