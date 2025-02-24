import { createContext } from "react";
import { ErrorState, FormBuilder } from "../models/Form";

interface BuilderContextProps {
  formBuilderData: FormBuilder[];
  errors: ErrorState[];
  addNewQuestion: () => void;
  handleFormChange: (
    index: number,
    key: keyof FormBuilder,
    value: string | number | boolean
  ) => void;
  isFormValid: boolean;
  isSaving: boolean;
  hasFetchedData: boolean;
  hasUserInteracted: boolean;
  deleteQuestion: (index: number) => void;
}

export const BuilderContext = createContext<BuilderContextProps | undefined>(
  undefined
);
