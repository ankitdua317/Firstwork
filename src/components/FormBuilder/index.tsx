import React, { useState } from "react";
import styles from "./builder.module.css";
import FloatingLabelInput from "../FormElements/Input";
import CustomSelect from "../FormElements/Select";
import CustomCheckbox from "../FormElements/Checkbox";
import Button from "../FormElements/Button";
import CollapsibleWrapper from "../Collapse";

const QuestionForm: React.FC = () => {
  const [isRequired, setIsRequired] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const questionTypes = ["Number", "Text", "Dropdown", "Paragraph"];

  return (
    <>
      <div className={styles.container}>
        <CollapsibleWrapper title="Question Title *">
          <div className={styles.header}>
            <FloatingLabelInput label="Question Title *" id="13" />
          </div>
          <div className={`${styles.formSection}`}>
            <CustomSelect label="Question Type *" options={questionTypes} />
            <div className={styles.checkboxGroup}>
              <CustomCheckbox
                label="Required"
                checked={isRequired}
                onChange={setIsRequired}
              />
              <CustomCheckbox
                label="Hidden"
                checked={isHidden}
                onChange={setIsHidden}
              />
            </div>
          </div>
          <br />
          <div>
            <FloatingLabelInput label="Helper text" id="17" />
            <div>
              <p className={styles.subText}>
                Additional instructions (optional)
              </p>
              <div className={`${styles.formSection} ${styles.layout}`}>
                <CustomSelect
                  label="Number Type *"
                  options={["Integer", "Float"]}
                />
                <div
                  className={`${styles.formSection} ${styles.miniFields} m-0`}
                >
                  <FloatingLabelInput label="Min" id="11" />
                  <FloatingLabelInput label="Max" id="12" />
                </div>
              </div>
            </div>
          </div>
        </CollapsibleWrapper>
      </div>
      <div className="control-btns">
        <Button label="Add Question" icon="+" />
      </div>
    </>
  );
};

export default QuestionForm;
