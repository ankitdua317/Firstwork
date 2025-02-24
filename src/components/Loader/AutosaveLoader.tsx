import React, { useEffect, useState } from "react";
import styles from "./AutosaveLoader.module.css";
import useBuilderContext from "../../hooks/useBuilderContext";

const AutoSaveLoader: React.FC = () => {
  const { isSaving } = useBuilderContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isSaving) {
      setLoading(true);
      return;
    }

    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [isSaving]);

  if (!isSaving && !loading) return null;

  return (
    <div className={styles.loaderContainer}>
      {isSaving ? (
        <div className={styles.loader} />
      ) : (
        <div className={styles.tick}>&#10004;</div>
      )}
    </div>
  );
};

export default AutoSaveLoader;
