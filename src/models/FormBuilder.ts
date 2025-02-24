export interface FormBuilder {
  id: number;
  quesTitle: string;
  quesType: string;
  requied?: boolean;
  hidden?: boolean;
  helperText?: string;
  numberType?: string;
  min?: number;
  max?: number;
}

export const INIT_STATE = {
  quesTitle: "",
  quesType: "",
};
