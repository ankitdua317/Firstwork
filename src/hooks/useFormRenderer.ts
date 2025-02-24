import { useState } from "react";
import useBuilderContext from "./useBuilderContext";
import { IFormRenderer } from "../models/Form";
import { NON_EMPTY_FIELD } from "../constants/errors";

const useFormRender = () => {
  const { formBuilderData } = useBuilderContext();
  const [formData, setFormData] = useState<IFormRenderer[]>(
    formBuilderData.filter((item) => !item.hidden)
  );
  const [errors, setErrors] = useState<{ [key: number]: string }>({});

  const handleChange = (index: number, value: string) => {
    setFormData((prev) => {
      const updatedData = [...prev];
      if (updatedData[index]) {
        updatedData[index] = { ...updatedData[index], value };
      }
      return updatedData;
    });

    if (formData[index].required) {
      validateField(index, value);
    }
  };

  const validateField = (index: number, value: string | number | boolean) => {
    setErrors({
      ...errors,
      [index]: value ? "" : NON_EMPTY_FIELD,
    });
  };

  const validateForm = () => {
    const currentErrors: { [key: number]: string } = {};
    formData.forEach(({ required, value }, index) => {
      if (required && !value) {
        currentErrors[index] = NON_EMPTY_FIELD;
      } else {
        delete currentErrors[index];
      }
    });

    const hasErrors = Object.keys(currentErrors).length > 0;
    setErrors(currentErrors);
    return hasErrors;
  };

  return { formData, errors, validateForm, handleChange };
};

export default useFormRender;
