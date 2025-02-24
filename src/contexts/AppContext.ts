import { createContext } from "react";
import { FormBuilder } from "../models/FormBuilder";

interface AppContextProps {
  formBuilderData: FormBuilder[];
  addNewQuestion: () => void;
  handleFormChange: (
    index: number,
    key: keyof FormBuilder,
    value: string | number | boolean
  ) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);
