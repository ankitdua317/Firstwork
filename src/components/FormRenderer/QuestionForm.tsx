import FormGroup from "./FormGroup";
import styles from "./render.module.css";
import Button from "../FormElements/Button";
import { IFormRenderer } from "../../models/Form";

interface Props {
  handleSubmit: () => void;
  formData: IFormRenderer[];
  errors: { [key: number]: string };
  handleChange: (index: number, value: string) => void;
}

const QuestionForm = ({
  formData,
  handleSubmit,
  handleChange,
  errors,
}: Props) => {
  return (
    <>
      <h1 className={styles.mt0}>My Form</h1>
      <div>
        {formData.map(
          ({ id, quesTitle, quesType, helperText, value }, index) => (
            <FormGroup
              key={id}
              index={index}
              id={id!}
              label={quesTitle!}
              type={quesType!}
              error={errors[index]}
              helperText={helperText}
              handleChange={handleChange}
              value={value}
            />
          )
        )}
      </div>
      <div>
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </>
  );
};

export default QuestionForm;
