import formJson from '../data/custom-form.json';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {MySelect, MyTextInput} from "../components";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};
for (const input of formJson) {
    initialValues[input.name] = input.value;
    if (!input.validations) continue;
    let schema = Yup.string();
    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido');
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Minimo de ${(rule as any).value || 2}`);
        }
        if (rule.type === 'email') {
            schema = schema.email('Email invalido');
        }
    }
    requiredFields[input.name] = schema;
}
const validationSchema = Yup.object({...requiredFields});
export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form noValidate>
                        {
                            formJson.map(({type, name, placeholder, label, value, options}) => {
                                if (type === 'input' || type === 'password' || type === 'email') {
                                    return <MyTextInput
                                        key={name}
                                        label={label}
                                        name={name}
                                        placeholder={placeholder}
                                        type={type as any}
                                    />
                                } else if (type === 'select') {
                                    return (
                                        <MySelect key={name} label={label} name={name}>
                                            <option value="">Select option</option>
                                            {
                                                options?.map(({label, id}) => (
                                                    <option key={id} value={id}>{label}</option>))
                                            }
                                        </MySelect>
                                    )
                                }
                                throw  new Error(`El type:${type}, no es soportado`)


                            })
                        }
                        <button type="submit">Submit</button>
                    </Form>

                )}
            </Formik>
        </div>
    );
}
