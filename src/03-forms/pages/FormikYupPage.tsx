import '../styles/styles.css';
import {useFormik} from "formik";
import * as Yup from 'yup';

export const FormikYupPage = () => {

    const {  errors, handleSubmit, touched,  getFieldProps} = useFormik({
            initialValues: {
                firsName: '',
                lastName: '',
                email: '',
            },
            validationSchema: Yup.object({
                firsName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
                lastName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
                email: Yup.string().email('Email invalido').required('Requerido'),
            }),
            onSubmit: (values) => {
                console.log(values);
            }
        }
    );
    return (
        <div>
            <h1>Formik Yup Tutorial</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firsName">First Name</label>
                <input
                    type="text"
                    {...getFieldProps('firsName')}
                />
                {touched.firsName && errors.firsName && <span>{errors.firsName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    {...getFieldProps('email')}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
