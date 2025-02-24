import React, { useState, ReactNode } from "react";
import { AppContext } from "./AppContext";
import { FormBuilder, INIT_STATE } from "../models/FormBuilder";

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formBuilderData, setFormBuilderData] = useState<FormBuilder[]>([]);

  const addNewQuestion = () => {
    setFormBuilderData((prev) => [
      ...(prev || []),
      { ...INIT_STATE, id: new Date().getTime() },
    ]);
  };

  return (
    <AppContext.Provider value={{ formBuilderData, addNewQuestion }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
