import React from "react";
import styles from "./AutosaveLoader.module.css";

interface AutoSaveLoaderProps {
  isSaving: boolean;
}

const AutoSaveLoader: React.FC<AutoSaveLoaderProps> = ({ isSaving }) => {
  return (
    <div className={styles.loaderContainer}>
      {isSaving ? (
        <div className={styles.loader}></div>
      ) : (
        <div className={styles.tick}>&#10004;</div>
      )}
    </div>
  );
};

export default AutoSaveLoader;
