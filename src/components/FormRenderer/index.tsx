import { useState } from "react";
import AnswerForm from "./AnswerForm";
import QuestionForm from "./QuestionForm";
import useFormRender from "../../hooks/useFormRenderer";

const FormRenderer = () => {
  const { formData, errors, validateForm, handleChange } = useFormRender();
  const [showSubmittedForm, setShowSubmittedForm] = useState(false);

  const toggleForm = () => {
    setShowSubmittedForm(true);
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      toggleForm();
    }
  };

  return (
    <div className="form">
      {showSubmittedForm ? (
        <AnswerForm formData={formData} />
      ) : (
        <QuestionForm
          handleSubmit={handleSubmit}
          errors={errors}
          handleChange={handleChange}
          formData={formData}
        />
      )}
    </div>
  );
};

export default FormRenderer;
