import { IFormRenderer } from "../../models/Form";
import styles from "./render.module.css";

interface Props {
  formData: IFormRenderer[];
}

const AnswerForm = ({ formData }: Props) => {
  return (
    <>
      <h1 className={styles.mt0}>Submitted Form</h1>
      <div>
        {formData.map(({ id, quesTitle, value }) => (
          <div key={id}>
            <p>{quesTitle}</p>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnswerForm;
