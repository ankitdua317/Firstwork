import React, { useState } from "react";
import styles from "./builder.module.css";
import Button from "../FormElements/Button";
import Modal from "../Modal";
import FormRenderer from "../FormRenderer";
import FormSection from "./FormSection";
import { useAppContext } from "../../hooks/useAppContext";

const FormBuilder: React.FC = () => {
  const { formBuilderData, addNewQuestion } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {formBuilderData.map((item) => (
        <FormSection key={item.id} {...item} />
      ))}
      <div className={styles.controlBtns}>
        <Button label="Add Questions" icon="+" onClick={addNewQuestion} />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FormRenderer />
      </Modal>
    </>
  );
};

export default FormBuilder;
