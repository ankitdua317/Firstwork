import React, { useState } from "react";
import styles from "./collapse.module.css";

interface CollapsibleWrapperProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleWrapper: React.FC<CollapsibleWrapperProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.collapsibleContainer}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <div>
          <button className={styles.deleteButton}>🗑</button>
          {isOpen ? "▼" : "▶"}
        </div>
      </button>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default CollapsibleWrapper;
