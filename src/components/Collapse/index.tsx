import React, { useState } from "react";
import styles from "./collapse.module.css";

interface CollapsibleWrapperProps {
  question?: string;
  title: string;
  children: React.ReactNode;
}

const CollapsibleWrapper: React.FC<CollapsibleWrapperProps> = ({
  question,
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.collapsibleContainer}>
      <div className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? question : title}
        <div>
          <button className={styles.deleteButton}>🗑</button>
          {isOpen ? "▼" : "▶"}
        </div>
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default CollapsibleWrapper;
