import React, { useState, useRef, useEffect } from "react";
import styles from "./select.module.css";

interface CustomSelectProps {
  label: string;
  options: string[];
  onChange: (value: string) => void;
  value?: string;
  error?: string | null;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  onChange,
  value,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [dropdownValue, setDropdownValue] = useState<string>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChange = (val: string) => {
    if (value !== val) {
      onChange(val);
      if (val) {
        setHasValue(true);
        setDropdownValue(val);
      } else {
        setHasValue(false);
      }
    }
  };

  useEffect(() => {
    if (value) {
      setHasValue(true);
      setDropdownValue(value);
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
    <div className="flex flex-column">
      <div
        ref={dropdownRef}
        className={`${styles.selectContainer} ${
          error ? styles.inputError : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        <div className="flex justify-between centered-flex">
          <div>
            <label
              className={`${styles.label} ${hasValue ? styles.active : ""}`}
            >
              {label}
            </label>
            <div className={styles.selectedValue}>{dropdownValue}</div>
          </div>
          <span className={`${isOpen ? "chevron-up" : "chevron-down"}`} />
        </div>
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
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default CustomSelect;
