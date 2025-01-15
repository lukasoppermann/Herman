import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  label?: string;
  value: string;
  type?: "hidden" | "parameter";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  placeholder?: string;
  suffix?: string;
  readOnly?: boolean;
  size?: "small" | "default";
}

const Input: React.FC<InputProps> = ({ label, value, type = "parameter", onChange, onBlur, placeholder, suffix, readOnly = false, size = "default" }) => {
  return (
    <div className={`${styles.inputContainer} ${styles[`inputType__${type}`]} ${styles[`inputSize__${size}`]} Input`}>
      <label className={styles.label}>{label}</label>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          readOnly={readOnly}
        />
        {suffix && <span className={styles.suffix}>{suffix}</span>}
    </div>
  );
};

export default Input;