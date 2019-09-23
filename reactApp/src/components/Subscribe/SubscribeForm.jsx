import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../common/TextInput';
import { Constants } from '../../constants/constants';
import { ElementNames } from '../../constants/elementsName';

const SignUpSchema = Yup
    .object()
    .shape({
        email: Yup.string()
        .email('Invalid email address') .required('Email is required.'),
        firstName: Yup.string()
         .min(2, 'Must be longer than 2 characters') 
         .max(255, 'Must be less than 255 characters') 
         .required('First name is required.'),
        lastName: Yup.string()
        .min(2, 'Must be longer than 2 characters') 
        .max(255, 'Must be less than 255 characters') 
        .required('Last name is required.'),
        mobilePhone:Yup.number()
        .typeError("Please enter a valid phone number")
        .positive("A phone number can't start with a minus")
    });
const formikEnhancer = withFormik({
    validationSchema: SignUpSchema,

    mapPropsToValues: ({ userForm }) => ({
        ...userForm
    }),
    mapValuesToPayload: x => x,
    handleSubmit: (payload, { props, setErrors, setSubmitting }) => {
        setErrors({});
        props.handleUserFormSubmitClick(payload, setErrors, setSubmitting);
    },
    displayName: 'SubscribeForm'
});
const SubscribeForm = (props) => {
    const {
        values,
        touched,
        errors,
        dirty,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting
    } = props;
    return (
        <div className="">
            <form className="form-inline" name="SubscribeForm" onSubmit={handleSubmit} noValidate>
                <div className="row">
                    <div className="col-12 col-md-6 my-3">
                        <TextInput
                            name={ElementNames.email}
                            type="text"
                            label={Constants.EMAIL}
                            error={touched.email && errors.email}
                            value={values.email}
                            onChange={handleChange} required/>
                    </div>
                    <div className='col-12 col-md-6 my-3'>
                        <TextInput
                            name={ElementNames.firstName}
                            type="text"
                            label={Constants.FIRST_NAME}
                            error={touched.firstName && errors.firstName}
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur} required/>
                    </div>
                    <div className='col-12 col-md-6 my-3'>
                        <TextInput
                            name={ElementNames.lastName}
                            type="text"
                            label={Constants.LAST_NAME}
                            error={touched.lastName && errors.lastName}
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur} required/>
                    </div>
                    <div className="col-12 col-md-6 my-3">
                        <TextInput
                            name='mobilePhone'
                            type="text"
                            label={Constants.MOBILE}
                            error={touched.mobilePhone && errors.mobilePhone}
                            value={values.mobilePhone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="" />
                    </div>
                    <div className="col-12 col-md-6 my-3">
                        <button
                            disabled={isSubmitting}
                            className=""
                            type="submit">
                            Submit
                                </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default formikEnhancer(SubscribeForm);