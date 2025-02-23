import { ReactNode } from "react";
import styles from "./button.module.css";

interface Props {
  label: string;
  icon?: ReactNode;
}

const Button = ({ label, icon }: Props) => {
  return (
    <button className={styles.btn}>
      {icon ? <span className={styles.icon}>{icon}</span> : null} {label}
    </button>
  );
};

export default Button;
