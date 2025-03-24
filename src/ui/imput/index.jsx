import React, { forwardRef } from 'react';
import styles from './styles.module.css';

const Input = forwardRef(
  ({ styleImp, type, placeholder, onChange,  onKeyDown,...rest }, ref) => {
    return (
      <input
        ref={ref}  
        type={type}
        style={styleImp}
        className={styles.inputCont}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        {...rest}
        required
      />
    );
  }
);

export default Input;
