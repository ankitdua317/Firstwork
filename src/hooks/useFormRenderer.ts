import { useState } from "react";
import useBuilderContext from "./useBuilderContext";
import { IFormRenderer } from "../models/Form";
import { LESS_ERROR, MORE_ERROR, NON_EMPTY_FIELD } from "../constants/errors";

const useFormRender = () => {
  const { formBuilderData } = useBuilderContext();
  const [formData, setFormData] = useState<IFormRenderer[]>(
    formBuilderData.filter((item) => !item.hidden)
  );
  const [errors, setErrors] = useState<{ [key: number]: string }>({});

  const handleChange = (index: number, value: string) => {
    const { required, min, max } = formData[index];
    setFormData((prev) => {
      const updatedData = [...prev];
      if (updatedData[index]) {
        updatedData[index] = { ...updatedData[index], value };
      }
      return updatedData;
    });

    let errorMsg = value ? "" : NON_EMPTY_FIELD;
    if (required) {
      if (min && value && Number(value) < Number(min)) {
        errorMsg = `${LESS_ERROR}${min}`;
      }
      if (max && value && Number(value) > Number(max)) {
        errorMsg = `${MORE_ERROR}${max}`;
      }
    }
    validateField(index, errorMsg);
  };

  const validateField = (index: number, err: string) => {
    setErrors({
      ...errors,
      [index]: err,
    });
  };

  const validateForm = () => {
    const currentErrors: { [key: number]: string } = {};
    formData.forEach(({ required, value }, index) => {
      if (required && !value) {
        currentErrors[index] = NON_EMPTY_FIELD;
      } else {
        if (value) delete currentErrors[index];
      }
    });

    const hasErrors = Object.keys(currentErrors).length > 0;
    setErrors(currentErrors);
    return hasErrors;
  };

  return { formData, errors, validateForm, handleChange };
};

export default useFormRender;
