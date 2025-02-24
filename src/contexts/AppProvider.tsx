import React, { useState, ReactNode } from "react";
import { AppContext } from "./AppContext";
import { FormBuilder } from "../models/FormBuilder";

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formBuilderData, setFormBuilderData] = useState<FormBuilder[]>([]);

  const addNewQuestion = () => {
    setFormBuilderData((prev) => [
      ...(prev || []),
      { id: new Date().getTime() },
    ]);
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
  };

  return (
    <AppContext.Provider
      value={{ formBuilderData, addNewQuestion, handleFormChange }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
