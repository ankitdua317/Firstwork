import React, { useState } from "react";
import styles from "./builder.module.css";
import Button from "../FormElements/Button";
import Modal from "../Modal";
import FormRenderer from "../FormRenderer";
import FormSection from "./FormSection";
import useBuilderContext from "../../hooks/useBuilderContext";

const FormBuilder: React.FC = () => {
  const { formBuilderData, addNewQuestion } = useBuilderContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {formBuilderData.map((item, index) => (
        <FormSection key={item.id} index={index} {...item} />
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
