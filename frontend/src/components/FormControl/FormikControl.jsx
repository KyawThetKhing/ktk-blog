import React from "react";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";
import Select from "./Select/Select";
import RadioGroup from "./RadioGroup/RadioGroup";
import CheckboxGroup from "./CheckboxGroup/CheckboxGroup";
import DatePicker from "./DatePicker/DatePicker";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioGroup {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
