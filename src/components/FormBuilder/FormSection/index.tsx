import styles from "./section.module.css";
import FloatingLabelInput from "../../FormElements/Input";
import CustomSelect from "../../FormElements/Select";
import CustomCheckbox from "../../FormElements/Checkbox";
import CollapsibleWrapper from "../../Collapse";
import { NUMBER_TYPE, QUESTION_TYPES } from "../../../constants/common";
import { FormBuilder, QUESTION_TYPES_ENUM } from "../../../models/Form";
import useBuilderContext from "../../../hooks/useBuilderContext";
import AutoSaveLoader from "../../Loader/AutosaveLoader";

interface FormSectionProps extends FormBuilder {
  index: number;
}

const FormSection = ({
  index,
  quesTitle,
  quesType,
  required,
  hidden,
  helperText,
  numberType,
  min,
  max,
}: FormSectionProps) => {
  const { handleFormChange, errors, deleteQuestion } = useBuilderContext();

  return (
    <div className={styles.container}>
      <AutoSaveLoader />
      <CollapsibleWrapper
        question={quesTitle}
        title={"Question Title *"}
        rightChild={
          <button
            className={styles.deleteButton}
            onClick={() => deleteQuestion(index)}
          >
            🗑
          </button>
        }
      >
        <div className={styles.header}>
          <FloatingLabelInput
            label="Question Title *"
            value={quesTitle}
            onChange={(val) => handleFormChange(index, "quesTitle", val)}
            error={errors[index].quesTitle}
          />
        </div>
        <div className={styles.formSection}>
          <CustomSelect
            label="Question Type *"
            options={QUESTION_TYPES}
            value={quesType}
            onChange={(val) => handleFormChange(index, "quesType", val)}
            error={errors[index].quesType}
          />
          <div className={styles.checkboxGroup}>
            <CustomCheckbox
              label="Required"
              checked={!!required}
              onChange={(val) => handleFormChange(index, "required", val)}
            />
            <CustomCheckbox
              label="Hidden"
              checked={!!hidden}
              onChange={(val) => handleFormChange(index, "hidden", val)}
            />
          </div>
        </div>
        <br />
        <FloatingLabelInput
          label="Helper text"
          value={helperText}
          onChange={(val) => handleFormChange(index, "helperText", val)}
        />
        <p className={styles.subText}>Additional instructions (optional)</p>
        {quesType === QUESTION_TYPES_ENUM.NUMBER ? (
          <div>
            <div className={`${styles.formSection} ${styles.layout}`}>
              <CustomSelect
                label="Number Type *"
                options={NUMBER_TYPE}
                value={numberType}
                onChange={(val) => handleFormChange(index, "numberType", val)}
                error={errors[index].numberType}
              />
              <div className={`${styles.formSection} ${styles.miniFields} m-0`}>
                <FloatingLabelInput
                  label="Min"
                  value={min}
                  onChange={(val) => handleFormChange(index, "min", val)}
                  number
                />
                <FloatingLabelInput
                  label="Max"
                  value={max}
                  onChange={(val) => handleFormChange(index, "max", val)}
                  number
                />
              </div>
            </div>
          </div>
        ) : null}
      </CollapsibleWrapper>
    </div>
  );
};

export default FormSection;
