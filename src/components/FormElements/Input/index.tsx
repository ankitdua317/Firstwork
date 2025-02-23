import { useEffect, useState } from "react";
import styles from "./input.module.css";

interface FloatingLabelInputProps {
  id: string;
  label: string;
  value?: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  id,
  label,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (val: string | number) => {
    if (val) {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  };

  useEffect(() => {
    if (value) {
      setHasValue(true);
    }
  }, [value]);

  return (
    <div className={styles.inputContainer}>
      <label
        className={`${styles.label} ${
          isFocused || hasValue ? styles.active : ""
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={styles.input}
      />
    </div>
  );
};

export default FloatingLabelInput;
