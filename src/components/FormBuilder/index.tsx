import React, { useState } from "react";
import styles from "./builder.module.css";
import Button from "../FormElements/Button";
import Modal from "../Modal";
import FormRenderer from "../FormRenderer";
import FormSection from "./FormSection";
import useBuilderContext from "../../hooks/useBuilderContext";
import Loader from "../Loader/Loader";

const FormBuilder: React.FC = () => {
  const { formBuilderData, addNewQuestion, isFormValid, hasFetchedData } =
    useBuilderContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!hasFetchedData) {
    return <Loader />;
  }

  return (
    <>
      {formBuilderData.map((item, index) => (
        <FormSection key={item.id} index={index} {...item} />
      ))}
      {isFormValid && (
        <div className={styles.controlBtns}>
          <Button label="Add Questions" icon="+" onClick={addNewQuestion} />
          {formBuilderData.length > 0 ? (
            <Button label="Build Form" onClick={() => setIsModalOpen(true)} />
          ) : null}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FormRenderer />
      </Modal>
    </>
  );
};

export default FormBuilder;
