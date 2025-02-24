export interface IFormBuilder {
  id: number;
  quesTitle: string;
  quesType: QUESTION_TYPES_ENUM;
  required: boolean;
  hidden: boolean;
  helperText: string;
  numberType: string;
  min: number;
  max: number;
}

export type FormBuilder = Partial<IFormBuilder>;

export enum QUESTION_TYPES_ENUM {
  NUMBER = "Number",
  TEXT = "Text",
  PARAGRAPH = "Paragraph",
}

export interface ErrorState {
  [key: number]: string | null;
}
