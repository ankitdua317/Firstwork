export interface IFormBuilder {
  id: number;
  quesTitle: string;
  quesType: QUESTION_TYPES_ENUM;
  required: boolean;
  hidden: boolean;
  helperText: string;
  numberType: string;
  min: string;
  max: string;
}

export type FormBuilder = Partial<IFormBuilder>;

export enum QUESTION_TYPES_ENUM {
  NUMBER = "Number",
  TEXT = "Text",
}

export type ErrorState = Partial<Record<keyof IFormBuilder, string | null>>;
