import React from 'react'
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label,  placeholder, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <div className="mb-2 mt-1">
            {label ? (<label htmlFor={field.name}>{label}</label>) : null}
            <input 
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                placeholder={placeholder}
                {...field} {...props}
                autoComplete='off'/>
            <ErrorMessage component="div" name={field.name} className='error'/>
        </div>
    )
}