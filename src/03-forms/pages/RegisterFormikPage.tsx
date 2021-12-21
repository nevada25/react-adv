import '../styles/styles.css';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {MyTextInput} from "../components";

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',

                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'Debe tener 2 caracteres o mas')
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Email invalido')
                            .required('Requerido'),
                        password1: Yup.string()
                            .min(6, 'Debe tener 6 caracteres o mas')
                            .required('Requerido'),
                        password2: Yup.string()
                            .when('password1', (password1, field) => password1 ? field.required().oneOf([Yup.ref('password1'), 'Las contraseñas no coinciden']) : field)
                    })}
            >
                {
                    ({handleReset}) => (
                        <Form>
                            <MyTextInput
                                type="text"
                                label="Name"
                                name="name"
                                placeholder="name"/>

                            <MyTextInput
                                type="email"
                                name="email"
                                label="Email"
                                placeholder="Ingrese su correo"
                            />

                            <MyTextInput
                                type="password"
                                name="password1"
                                placeholder="Password"
                                label="Password"
                            />
                            <MyTextInput
                                type="password"
                                label="Confirmar Password"
                                name="password2"
                                autoComplete="off"
                                placeholder="Repeat Password"
                            />
                            <button type="submit">Create</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }

            </Formik>
        </div>
    );
}
