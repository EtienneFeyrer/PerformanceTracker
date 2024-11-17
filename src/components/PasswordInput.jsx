import React from 'react';

const PasswordInput = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <input 
        type="password" // Change type to password to mask input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  );
};

export default PasswordInput;
