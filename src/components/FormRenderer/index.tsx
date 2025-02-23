import FormGroup from "./Elements/FormGroup";
import Button from "../FormElements/Button";

const DATA = {
  title: "My form",
  elements: [
    {
      id: new Date().getTime().toString(),
      label: "Text field",
      type: "input",
    },
    {
      id: new Date().getTime().toString(),
      label: "Selct field",
      type: "select",
    },
    {
      id: new Date().getTime().toString(),
      label: "Text field",
      type: "input",
    },
    {
      id: new Date().getTime().toString(),
      label: "Text field",
      type: "input",
    },
    {
      id: new Date().getTime().toString(),
      label: "Selct field",
      type: "select",
    },
  ],
};

const FormRenderer = () => {
  return (
    <div className="form">
      <h1>{DATA.title}</h1>
      <div className="form-body">
        {DATA.elements.map((item) => (
          <FormGroup label={item.label} type={item.type} id={item.id} />
        ))}
      </div>
      <div className="form-footer">
        <Button label="Submit" />
      </div>
    </div>
  );
};

export default FormRenderer;
