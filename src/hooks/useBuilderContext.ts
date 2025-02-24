import { useContext } from "react";
import { BuilderContext } from "../contexts/BuilderContext";

const useBuilderContext = () => {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error("useBuilderContext must be used within an BuilderProvider");
  }
  return context;
};

export default useBuilderContext;
