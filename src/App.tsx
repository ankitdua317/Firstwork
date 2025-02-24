import "./App.css";
import FormBuilder from "./components/FormBuilder";
import AppProvider from "./contexts/AppProvider";

const App: React.FC = () => {
  return (
    <AppProvider>
      <FormBuilder />
    </AppProvider>
  );
};

export default App;
