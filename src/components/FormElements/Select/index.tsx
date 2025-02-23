import React, { useState, useRef, useEffect } from "react";
import styles from "./select.module.css";

interface CustomSelectProps {
  label: string;
  options: string[];
  value?: string | number;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [dropdownValue, setDropdownValue] = useState<string | number>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChange = (val: string | number) => {
    if (val) {
      setHasValue(true);
      setDropdownValue(val);
    } else {
      setHasValue(false);
    }
  };

  useEffect(() => {
    if (value) {
      setHasValue(true);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={styles.selectContainer}
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={0}
    >
      <label className={`${styles.label} ${hasValue ? styles.active : ""}`}>
        {label}
      </label>
      <div className={styles.selectedValue}>{dropdownValue}</div>
      <div className={`${styles.dropdown} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className={styles.option}
            onClick={() => handleChange(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
