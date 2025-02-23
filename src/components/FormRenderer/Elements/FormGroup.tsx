import React from "react";
import FloatingLabelInput from "../../FormElements/Input";
import CustomSelect from "../../FormElements/Select";
import CustomCheckbox from "../../FormElements/Checkbox";

interface FormGroupProps {
  id: string;
  label: string;
  type: string;
}

const FormGroup: React.FC<FormGroupProps> = ({ label, type, id }) => {
  const renderFields = (type: string) => {
    switch (type) {
      case "checkbox":
        return (
          <div className="form-group">
            <CustomCheckbox
              label="Required"
              checked={true}
              onChange={() => {}}
            />
          </div>
        );
      case "select":
        return (
          <div className="form-group">
            <CustomSelect label={label} options={["Integer", "Float"]} />
          </div>
        );
      default:
        return (
          <div className="form-group">
            <FloatingLabelInput label={label} id={id} />
          </div>
        );
    }
  };
  return <>{renderFields(type)}</>;
};

export default FormGroup;
