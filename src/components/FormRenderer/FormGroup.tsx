import React from "react";
import { QUESTION_TYPES_ENUM } from "../../models/Form";
import FloatingLabelInput from "../FormElements/Input";
import styles from "./render.module.css";

interface FormGroupProps {
  id: number;
  label: string;
  type: QUESTION_TYPES_ENUM;
  handleChange: (index: number, value: string) => void;
  index: number;
  helperText?: string;
  error?: string;
  value?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  type,
  handleChange,
  index,
  helperText,
  error,
  value,
}) => {
  const renderFields = () => {
    // We can add switch case here based on type to support multiple types
    return (
      <div className="form-group">
        <FloatingLabelInput
          label={label}
          number={type === QUESTION_TYPES_ENUM.NUMBER}
          onChange={(val) => handleChange(index, val)}
          error={error}
          value={value}
        />
        {helperText ? <p className={styles.m4}>{`(${helperText})`}</p> : null}
      </div>
    );
  };

  return <>{renderFields()}</>;
};

export default FormGroup;
