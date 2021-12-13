import React from 'react'

export const RadioButtonGroup = ({
    error,
    touched,
    label,
    children
  }) => {
    return (
      <div className='mb-2'>
          <label>{label}</label>
          {children}
          {touched && error && <div className="error">{error}</div>}
      </div>
    );
  };