import { useState } from "react";
import FormGroup from "./Elements/FormGroup";
import Button from "../FormElements/Button";
import useBuilderContext from "../../hooks/useBuilderContext";
import { IFormRenderer } from "../../models/Form";

const FormRenderer = () => {
  const { formBuilderData } = useBuilderContext();
  const [formData, setFormData] = useState<IFormRenderer[]>(
    formBuilderData.filter((item) => !item.hidden)
  );

  const handleChange = (index: number, value: string) => {
    setFormData((prev) => {
      const updatedData = [...prev];
      if (updatedData[index]) {
        updatedData[index] = { ...updatedData[index], value };
      }
      return updatedData;
    });
  };

  return (
    <div className="form">
      <h1>My Form</h1>
      <div className="form-body">
        {formData.map(
          ({ id, quesTitle, quesType, helperText, value }, index) => (
            <FormGroup
              key={id}
              index={index}
              id={id!}
              label={quesTitle!}
              type={quesType!}
              // TODO
              error={index ? "Error" : ""}
              helperText={helperText}
              handleChange={handleChange}
              value={value}
            />
          )
        )}
      </div>
      <div className="form-footer">
        <Button label="Submit" onClick={() => {}} />
      </div>
    </div>
  );
};

export default FormRenderer;
