import React from 'react'
import { ErrorMessage, useField } from 'formik';

export const CheckboxField = ({ label, id, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <div className="form-check mb-2">
            <input 
                className={`form-check-input ${meta.touched && meta.error && 'is-invalid'}`}
                type="checkbox"
                id={id}
                {...field} {...props} 
            />
            <label className="form-check-label" htmlFor={id}>{label}</label>
            <ErrorMessage component="div" name={field.name} className='error'/>
        </div>
    )
}
    