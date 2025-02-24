import React, { useState, ReactNode, useEffect } from "react";
import { BuilderContext } from "../contexts/BuilderContext";
import { ErrorState, FormBuilder, QUESTION_TYPES_ENUM } from "../models/Form";
import {
  NUMBER_TYPE_REQD,
  QUES_TITLE_REQD,
  QUES_TYPE_REQD,
} from "../constants/errors";
import addQuestions from "../api/addQuestions";
import fetchQuestions from "../api/fetchQuestions";

export const BuilderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formBuilderData, setFormBuilderData] = useState<FormBuilder[]>([]);
  const [errors, setErrors] = useState<ErrorState[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const isFormValid = errors.every((error) =>
    Object.values(error).every((msg) => msg === null)
  );

  const addNewQuestion = () => {
    setFormBuilderData((prev) => [...prev, { id: Date.now(), required: true }]);
    setErrors((prevErrors) => [
      ...prevErrors,
      { quesTitle: QUES_TITLE_REQD, quesType: QUES_TYPE_REQD },
    ]);
  };

  const validateField = (
    index: number,
    key: keyof FormBuilder,
    value: string | number | boolean
  ) => {
    setErrors((prevErrors) => {
      const updatedErrors = [...prevErrors];

      if (!updatedErrors[index]) {
        updatedErrors[index] = {};
      }

      const fieldErrors = { ...updatedErrors[index] };

      if (key === "quesTitle") {
        fieldErrors[key] =
          typeof value === "string" && value.trim() === ""
            ? QUES_TITLE_REQD
            : null;
      }

      if (key === "quesType") {
        fieldErrors[key] =
          typeof value === "string" && value.trim() === ""
            ? QUES_TYPE_REQD
            : null;

        if (value === QUESTION_TYPES_ENUM.NUMBER) {
          fieldErrors.numberType = NUMBER_TYPE_REQD;
        } else {
          fieldErrors.numberType = null;
        }
      }

      if (key === "numberType") {
        fieldErrors[key] = null;

        if (value === QUESTION_TYPES_ENUM.NUMBER) {
          fieldErrors.numberType = NUMBER_TYPE_REQD;
        }
      }

      updatedErrors[index] = fieldErrors;

      return updatedErrors;
    });
  };

  const handleFormChange = (
    index: number,
    key: keyof FormBuilder,
    value: string | number | boolean
  ) => {
    setHasUserInteracted(true);
    setFormBuilderData((prev) => {
      const updatedData = [...prev];
      if (updatedData[index]) {
        updatedData[index] = { ...updatedData[index], [key]: value };
      }
      if (key === "quesType") {
        delete updatedData[index].numberType;
        delete updatedData[index].max;
        delete updatedData[index].min;
      }
      return updatedData;
    });

    validateField(index, key, value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuestions();
      setFormBuilderData(data);
      setErrors(new Array(data.length).fill({}));
      setHasFetchedData(true);
    };

    fetchData();
  }, []);

  // Debounced Auto-Save Logic
  useEffect(() => {
    if (!isFormValid || formBuilderData.length === 0 || !hasUserInteracted)
      return;

    const timeout = setTimeout(() => {
      setIsSaving(true);
      addQuestions(formBuilderData)
        .then(() => {
          console.log("Auto-saved successfully!");
        })
        .catch((err) => console.error("Auto-save failed:", err))
        .finally(() => setIsSaving(false));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [formBuilderData, isFormValid, hasUserInteracted]);

  return (
    <BuilderContext.Provider
      value={{
        formBuilderData,
        addNewQuestion,
        handleFormChange,
        errors,
        isFormValid,
        isSaving,
        hasFetchedData,
        hasUserInteracted,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};

export default BuilderProvider;
