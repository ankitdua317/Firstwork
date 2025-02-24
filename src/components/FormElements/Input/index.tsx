import { useEffect, useState } from "react";
import styles from "./input.module.css";

interface FloatingLabelInputProps {
  label: string;
  onChange: (value: string) => void;
  value?: string;
  error?: string | null;
  number?: boolean;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  onChange,
  value,
  error,
  number = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  const handleChange = (val: string) => {
    if (number && !/^\d*$/.test(val)) return;
    onChange(val);
    setHasValue(!!val);
  };

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  return (
    <div className="flex flex-column">
      <div className={styles.inputContainer}>
        <label
          className={`${styles.label} ${
            isFocused || hasValue ? styles.active : ""
          }`}
        >
          {label}
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${styles.input} ${error ? styles.inputError : ""}`}
          inputMode={number ? "numeric" : "text"}
        />
      </div>
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default FloatingLabelInput;
