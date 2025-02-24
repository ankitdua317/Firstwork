import { FormBuilder } from "../models/Form";
import { getLocalStorageKey } from "../utils/localStorage";

const fetchQuestions = (): Promise<FormBuilder[]> => {
  return new Promise<FormBuilder[]>((resolve) => {
    setTimeout(() => {
      const data = getLocalStorageKey<FormBuilder[], FormBuilder[]>(
        "questions",
        []
      );
      resolve(data!);
    }, 1000);
  });
};

export default fetchQuestions;
