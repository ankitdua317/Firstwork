import "./App.css";
import QuestionForm from "./components/FormBuilder";
import FormRenderer from "./components/FormRenderer";

const App: React.FC = () => {
  return (
    <>
      <QuestionForm />
      <hr />
      <FormRenderer />
    </>
  );
};

export default App;
