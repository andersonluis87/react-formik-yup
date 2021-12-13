import React from 'react'
import { useField } from 'formik';


export const RadioButtonField =({
    id,
    label,
    className,
    ...props
  }) => {
    const [field, meta] = useField(props);

    const radioClassName = `form-check-input ${meta.touched && meta.error ? 'is-invalid' : ''}`;

    return (
      <div className="form-check">
        <input
          name={field.name}
          id={id}
          type="radio"
          value={id}
          checked={id === field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          className={radioClassName}
          {...props}
        />
        <label className="form-check-label" htmlFor={id}>{label}</label>
      </div>
    );
  };