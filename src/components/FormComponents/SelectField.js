import React from 'react'
import { ErrorMessage, useField } from 'formik';

export const SelectField = ({ label, id, options, className, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <div className={`${className}`}>
            <label htmlFor={id} className={className ? `${className}-text` : ''}>{label}</label>
            <select
                className={`form-select ${meta.touched && meta.error && 'is-invalid'}`}
                aria-label="Select the country"
                id={id}
                {...field} {...props}
            >
                <option defaultValue=""></option>
                {options.map(option => (
                    <option key={option.id} value={option.value}>{option.label}</option>
                ))}
            </select>
            <ErrorMessage component="div" name={field.name} className='error'/>
        </div>
    )
}