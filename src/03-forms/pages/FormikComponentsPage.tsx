import '../styles/styles.css';
import {Form, ErrorMessage, Field, Formik, FieldArray} from "formik";
import * as Yup from 'yup';

interface detailProduct {
    name: string;
    age: number;
    gender: string;
}

export const FormikComponentsPage = () => {
    const getTotalCost = (details: detailProduct[]) => {
        return details.map(t => !isNaN(t.age) ? Number(t.age) : 0).reduce((acc, value) => acc + value, 0)
    }

    return (
        <div className="container-fluid">
            <h1>Formik Component Tutorial</h1>

            <Formik
                initialValues={{
                    "firsName": "First name",
                    "lastName": "Last name",
                    "email": "test1@test.com",
                    "terms": true,
                    "jobType": "developers",
                    "details": [
                        {
                            "name": "prueba1",
                            "age": 0,
                            "gender": "1"
                        }
                    ]
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={
                    Yup.object({
                        firsName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
                        lastName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
                        email: Yup.string().email('Email invalido').required('Requerido'),
                        terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string().notOneOf(['it-jr', 'Esta accion no es permitido']).required('Requerido'),
                        details: Yup.array()
                            .of(
                                Yup.object().shape({
                                    name: Yup.string().min(2, 'too short').required('Name Requerido'), // these constraints take precedence
                                    age: Yup.number().required('Age Requerido'), // these constraints take precedence
                                    gender: Yup.string().required('Gender Requerido'), // these constraints take precedence
                                })
                            )
                            .required('Must have friends') // these constraints are shown if and only if inner constraints are satisfied
                            .min(1, 'Minimum of 3 friends'),
                    })}
            >
                {
                    ({values}) => (
                        <Form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="firsName">First Name</label>
                                        <Field name="firsName" type="text" className="form-control"/>
                                        <ErrorMessage name="firsName" component="small"
                                                      className="form-text text-mute text-danger"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field name="lastName" type="text" className="form-control"/>
                                        <ErrorMessage name="lastName" component="small"
                                                      className="form-text text-mute text-danger"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field name="email" type="text" className="form-control"/>
                                        <ErrorMessage name="email" component="small"
                                                      className="form-text text-mute text-danger"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="jobType">Job Type</label>
                                        <Field name="jobType" as="select" className="form-control">
                                            <option value="">Pick something</option>
                                            <option value="developers">Developers</option>
                                            <option value="designer">Designer</option>
                                            <option value="it-senior">IT Senior</option>
                                            <option value="it-jr">IT Jr.</option>
                                        </Field>
                                        <ErrorMessage name="jobType" component="small"
                                                      className="form-text text-mute text-danger"/>
                                    </div>
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col-lg-12 text-right">
                                    <div className="form-group form-check">
                                        <label className="form-check-label"> <Field name="terms"
                                                                                    className="form-check-input"
                                                                                    type="checkbox"/> Terms and
                                            Conditions</label>
                                        <ErrorMessage name="terms" component="small"
                                                      className="form-text text-mute text-danger"/>
                                    </div>
                                </div>
                            </div>


                            <FieldArray
                                name="details"
                                render={arrayHelpers => (
                                    <div className="row mt-5">
                                        <div className="col-lg-12 text-right">
                                            <button
                                                type="button" className="btn btn-primary"
                                                onClick={() => arrayHelpers.push({name: '', age: 2, gender: ''})}
                                            >
                                                <i className="fas fa-plus"/> Agregar item
                                            </button>
                                        </div>


                                        {values.details.map((detail, index) => (

                                            <div key={index} className="col-lg-12">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <Field name={`details[${index}].name`}
                                                                   className="form-control"/>
                                                            <ErrorMessage name={`details[${index}].name`}
                                                                          component="small"
                                                                          className="form-text text-mute text-danger"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <Field name={`details.${index}.age`}
                                                                   className="form-control"/>
                                                            <ErrorMessage name={`details.${index}.age`}
                                                                          component="small"
                                                                          className="form-text text-mute text-danger"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="form-group">
                                                            <Field name={`details.${index}.gender`} component="select"
                                                                   className="form-control">
                                                                <option value="">Pick something</option>
                                                                <option value="1">Masculino</option>
                                                                <option value="2">Femenino</option>
                                                            </Field>
                                                            <ErrorMessage name={`details.${index}.gender`}
                                                                          component="small"
                                                                          className="form-text text-mute text-danger"/>

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <button type="button" className="btn btn-danger"
                                                                onClick={() => arrayHelpers.remove(index)}>
                                                            <i className="fas fa-trash"/>
                                                        </button>
                                                    </div>


                                                </div>

                                            </div>
                                        ))}

                                    </div>
                                )}
                            />
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-4">Sub Total</div>
                                <div className="col-lg-4"></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-4">Total</div>
                                <div
                                    className="col-lg-4"><p>{getTotalCost(values.details)}</p>
                                </div>
                            </div>

                            <button type="submit">Submit</button>

                            <pre className="text-white">{
                                JSON.stringify(values, null, 3)
                            }</pre>
                        </Form>

                    )
                }
            </Formik>


        </div>
    );
}
