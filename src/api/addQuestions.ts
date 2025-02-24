import { FormBuilder } from "../models/FormBuilder";
import { setLocalStorageKey } from "../utils/localStorage";

const addQuestions = (questions: FormBuilder[]) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      setLocalStorageKey("questions", questions);
      resolve("Successful");
    }, 1000);
  });
};

export default addQuestions;
