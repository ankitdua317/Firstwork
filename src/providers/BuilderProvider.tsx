import React, { useState, ReactNode } from "react";
import { BuilderContext } from "../contexts/BuilderContext";
import { ErrorState, FormBuilder } from "../models/FormBuilder";
import { QUES_TITLE_REQD } from "../constants/errors";

export const BuilderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formBuilderData, setFormBuilderData] = useState<FormBuilder[]>([]);
  const [errors, setErrors] = useState<ErrorState>({});

  const validateField = (
    index: number,
    key: keyof FormBuilder,
    value: string | number | boolean
  ) => {
    let errorMessage: string | null = null;

    if (
      key === "quesTitle" &&
      typeof value === "string" &&
      value.trim() === ""
    ) {
      errorMessage = QUES_TITLE_REQD;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [index]: errorMessage,
    }));
  };

  const addNewQuestion = () => {
    setFormBuilderData((prev) => [...prev, { id: Date.now() }]);
  };

  const handleFormChange = (
    index: number,
    key: keyof FormBuilder,
    value: string | number | boolean
  ) => {
    setFormBuilderData((prev) => {
      const updatedData = [...prev];
      if (updatedData[index]) {
        updatedData[index] = { ...updatedData[index], [key]: value };
      }
      return updatedData;
    });

    validateField(index, key, value);
  };

  const isFormValid = Object.values(errors).every((error) => error === null);

  return (
    <BuilderContext.Provider
      value={{
        formBuilderData,
        addNewQuestion,
        handleFormChange,
        errors,
        isFormValid,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};

export default BuilderProvider;
