import { createContext } from "react";
import { ErrorState, FormBuilder } from "../models/FormBuilder";

interface BuilderContextProps {
  formBuilderData: FormBuilder[];
  errors: ErrorState;
  addNewQuestion: () => void;
  handleFormChange: (
    index: number,
    key: keyof FormBuilder,
    value: string | number | boolean
  ) => void;
  isFormValid: boolean;
}

export const BuilderContext = createContext<BuilderContextProps | undefined>(
  undefined
);
