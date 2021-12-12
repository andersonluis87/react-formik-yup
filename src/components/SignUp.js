import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'; 
import { TextField } from './TextField';

export const SignUp = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('First name is required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Last name is required'),
        email: Yup.string()
            .email('Not a valid email')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null, 'Passwords must match'])
            .required('Confirm password is required')
    })

    return (
        <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
            >
            {formik => (
                <div className="my-4 font-weight-bold-display-4"> 
                    <h1>Formik + YUP Validation</h1>
                    <hr />
                    <Form>
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />

                        <button className="btn btn-dark mt-3" type="submit">Register</button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
