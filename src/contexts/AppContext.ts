import { createContext } from "react";
import { FormBuilder } from "../models/FormBuilder";

interface AppContextProps {
  formBuilderData: FormBuilder[];
  addNewQuestion: () => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);
