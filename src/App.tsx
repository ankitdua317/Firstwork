import "./App.css";
import FormBuilder from "./components/FormBuilder";
import BuilderProvider from "./providers/BuilderProvider";

const App: React.FC = () => {
  return (
    <BuilderProvider>
      <FormBuilder />
    </BuilderProvider>
  );
};

export default App;
