import { ReactNode } from "react";
import styles from "./button.module.css";

interface Props {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: ReactNode;
}

const Button = ({ label, onClick, icon }: Props) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {icon ? <span className={styles.icon}>{icon}</span> : null} {label}
    </button>
  );
};

export default Button;
