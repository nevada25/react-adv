import '../styles/styles.css';
import {Form, ErrorMessage, Field, Formik} from "formik";
import * as Yup from 'yup';

export const FormikComponentsPage = () => {

    return (
        <div>
            <h1>Formik Component Tutorial</h1>

            <Formik
                initialValues={{
                    firsName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={
                    Yup.object({
                        firsName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
                        lastName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
                        email: Yup.string().email('Email invalido').required('Requerido'),
                        terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string().notOneOf(['it-jr', 'Esta accion no es permitido']).required('Requerido')
                    })}
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="firsName">First Name</label>
                            <Field name="firsName" type="text"/>
                            <ErrorMessage name="firsName" component="span"/>
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component="span"/>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text"/>
                            <ErrorMessage name="email" component="span"/>

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick something</option>
                                <option value="developers">Developers</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>


                            <label> <Field name="terms" type="checkbox"/> Terms and Conditions</label>

                            <ErrorMessage name="terms" component="span"/>
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>


        </div>
    );
}
