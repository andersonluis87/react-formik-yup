import React, { useState} from 'react'
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup'; 
import { TextField, CheckboxField, RadioButtonField, RadioButtonGroup, SelectField } from './FormComponents';
import { randomNumber } from '../utils';
import { countries, preferences } from '../data'

export const SignUp = () => {
    const [isFormikDataVisible, setFormikDataVisibility] = useState(false);
    const handleFormikDataVisibility = () => {
        setFormikDataVisibility(!isFormikDataVisible)
    }
    const returnNewPreferenceObject = () => { 
        return { type: '', title: '', id: "" + randomNumber() }
    } 

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
            .required('Confirm password is required'),
        gender: Yup.string().required('Gender is required'),
        terms: Yup.boolean()
            .oneOf([true], 'You must accept the terms and conditions to continue'),
        country: Yup.string().required('Select the country'),
        preferences: Yup.array().of(Yup.object({
            title: Yup.string().required('Title is required'),
            type: Yup.string().required('Type is required'),
            id: Yup.string().required()
        })),
    })

    return (
        <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                gender: '',
                terms: false,
                country: '',
                preferences: [
                    {
                        id: "" + randomNumber(),
                        type: "",
                        title: ""
                    }
                ]
            }}
            validationSchema={validate}
            onSubmit={( data, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                
                setTimeout(()=> {
                    alert('Form submitted!');

                    console.log(data);

                    setSubmitting(false);
                    resetForm();
                }, 5000);

            }}>
            {formik => (
                <>
                    <div className="my-4 font-weight-bold-display-4"> 
                        <h1>Formik + YUP Validation</h1>
                        <hr />
                        <Form>
                            <TextField label="First Name" name="firstName" type="text" />
                            <TextField label="Last Name" name="lastName" type="text" />
                            <TextField label="Email" name="email" type="email" />

                            <RadioButtonGroup
                                id="gender"
                                label="Gender"
                                value={formik.values.gender}
                                error={formik.errors.gender}
                                touched={formik.touched.gender}
                            >
                                <RadioButtonField label="Male" name="gender" id="male" />
                                <RadioButtonField label="Female" name="gender" id="female"  />
                            </RadioButtonGroup>

                            <SelectField label="Country" id="country" name="country" options={countries} />

                            <FieldArray name="preferences">
                                {arrayHelpers => (
                                    <div className="container border border-1 mt-3 mb-3">
                                        <label className="mb-2 mt-2">Choose your preferences</label>
                                        {formik.values.preferences.map((preference, index) => {
                                            return (
                                                <div key={index}>
                                                    <SelectField 
                                                        id={preference.id} 
                                                        className="input-group" 
                                                        label="Preference" 
                                                        name={`preferences.${index}.type`} 
                                                        options={preferences} 
                                                    />
                                                    <TextField name={`preferences.${index}.title`} placeholder="Type your preference" type="text" />

                                                    <button
                                                        className="btn btn-danger btn-sm ml-3 mb-3 "
                                                        onClick={() => index > 0 && arrayHelpers.remove(index)} 
                                                        type="button">
                                                        - preference
                                                    </button>  
                                                </div>
                                            )
                                        })}                                    
                                        
                                        <button
                                            className="btn btn-secondary btn-sm mb-3 "
                                            onClick={() => arrayHelpers.push(returnNewPreferenceObject())} 
                                            type="button">
                                            + preference
                                        </button>
                                    </div>
                                )}
                            </FieldArray>

                            <TextField label="Password" name="password" type="password" />
                            <TextField label="Confirm Password" name="confirmPassword" type="password" />

                            <CheckboxField label="I agree to the terms and conditions" name="terms" id="terms" />

                            <button className="btn btn-dark mt-3 me-1" type="submit" disabled={formik.isSubmitting}>{!formik.isSubmitting ? 'Register' : 'Registering...'}</button>
                            <button className="btn btn-danger mt-3 me-1" disabled={formik.isSubmitting} type="reset">Reset</button>
                            <button className="btn btn-primary mt-3 " onClick={handleFormikDataVisibility} type="button">{!isFormikDataVisible ? 'Show Formik Data' : 'Hide Formik Data'}</button>
                        </Form>
                    </div>
                    <div>
                        { !isFormikDataVisible ? null : (
                            <pre>{JSON.stringify(formik, null, 2)}</pre> 
                        )}
                    </div>
                </>
            )}
        </Formik>
    )
}
