import '../styles/styles.css';
import {FormikErrors, useFormik} from "formik";

interface FormValue {
    firsName: string,
    lastName: string,
    email: string
}

export const FormikBasicPage = () => {
    const validate = ({firsName, lastName, email}: FormValue) => {
        const errors: FormikErrors<FormValue> = {};
        if (!firsName) {
            errors.firsName = 'Required';
        } else if (firsName.length >= 15) {
            errors.firsName = 'Must be 15 characters or less'
        }

        if (!lastName) {
            errors.lastName = 'Required';
        } else if (lastName.length >= 10) {
            errors.lastName = 'Must be 10 characters or less'
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }
    const {handleChange, values, errors, handleSubmit, touched, handleBlur} = useFormik({
            initialValues: {
                firsName: '',
                lastName: '',
                email: '',
            },
            validate,
            onSubmit: (values) => {
                console.log(values);
            }
        }
    );
    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firsNAme">First Name</label>
                <input
                    type="text"
                    name="firsName"
                    onChange={handleChange}
                    value={values.firsName}
                    onBlur={handleBlur}
                />
                {touched.firsName && errors.firsName && <span>{errors.firsName}</span>}

                <label htmlFor="firsNAme">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                    onBlur={handleBlur}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                <label htmlFor="firsNAme">Email Address</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
