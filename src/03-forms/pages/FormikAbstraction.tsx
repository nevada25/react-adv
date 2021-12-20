import '../styles/styles.css';
import {Form,   Formik} from "formik";
import * as Yup from 'yup';
import {MyCheckBox, MySelect, MyTextInput} from "../components";

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction Tutorial</h1>

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
                            <MyTextInput
                                label="First Name"
                                name="firsName"
                                placeholder="KEvin"
                            />
                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                placeholder="KEvin"
                            />
                            <MyTextInput
                                label="Email"
                                name="email"
                                placeholder="KEvin"
                                type="email"
                            />


                            <MySelect label="Job Type" name="jobType" as="select">
                                <option value="">Pick something</option>
                                <option value="developers">Developers</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </MySelect>


                            <MyCheckBox label="Terms and Conditions" name="terms"/>
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>


        </div>
    );
}
