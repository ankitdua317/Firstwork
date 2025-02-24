import styles from "./section.module.css";
import FloatingLabelInput from "../../FormElements/Input";
import CustomSelect from "../../FormElements/Select";
import CustomCheckbox from "../../FormElements/Checkbox";
import CollapsibleWrapper from "../../Collapse";
import { QUESTION_TYPES } from "../../../constants/common";
import { FormBuilder } from "../../../models/FormBuilder";

const FormSection = ({ quesTitle, quesType, requied, hidden }: FormBuilder) => {
  return (
    <div className={styles.container}>
      <CollapsibleWrapper title="Question Title *">
        <div className={styles.header}>
          <FloatingLabelInput label="Question Title *" value={quesTitle} />
        </div>
        <div className={`${styles.formSection}`}>
          <CustomSelect
            label="Question Type *"
            options={QUESTION_TYPES}
            value={quesType}
          />
          <div className={styles.checkboxGroup}>
            <CustomCheckbox
              label="Required"
              checked={!!requied}
              onChange={() => {}}
            />
            <CustomCheckbox
              label="Hidden"
              checked={!!hidden}
              onChange={() => {}}
            />
          </div>
        </div>
        <br />
        <div>
          <FloatingLabelInput label="Helper text" />
          <p className={styles.subText}>Additional instructions (optional)</p>
          <div>
            <div className={`${styles.formSection} ${styles.layout}`}>
              <CustomSelect
                label="Number Type *"
                options={["Integer", "Float"]}
              />
              <div className={`${styles.formSection} ${styles.miniFields} m-0`}>
                <FloatingLabelInput label="Min" />
                <FloatingLabelInput label="Max" />
              </div>
            </div>
          </div>
        </div>
      </CollapsibleWrapper>
    </div>
  );
};

export default FormSection;
