import React, {useEffect} from "react";
import { useFormikContext } from "formik";

import TextInputApp from "../TextInputApp";
import ErrorMessage from "./ErrorMessage";


function AppEditAbleForm({ name, ...otherProps }) {
  const {values, setFieldTouched, handleChange, errors, touched, setFieldValue } = useFormikContext();
  
  useEffect(() => {
    const { val } = otherProps;
    setFieldValue(name, val?val:'');
  }, []);

  return (
    <>
      <TextInputApp
        onBlur={() => setFieldTouched(name)}
        value = {values[name]}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppEditAbleForm;