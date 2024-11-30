import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  unit?: string;
  readOnly?: boolean;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, placeholder, unit, readOnly = false }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
        />
        {unit && <span className={styles.unit}>{unit}</span>}
    </div>
  );
};

export default Input;