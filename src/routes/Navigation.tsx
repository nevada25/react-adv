import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import logo from '../logo.svg'
import {
    DynamicForm,
    FormikAbstraction,
    FormikBasicPage,
    FormikComponentsPage,
    FormikYupPage,
    RegisterFormikPage,
    RegisterPage
} from "../03-forms/pages";

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        <li>
                            <NavLink exact activeClassName="nav-active" to="/register">Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="nav-active" to="/registerFormik">Register Formik
                                Page</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="nav-active" to="/formikBasic">Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="nav-active" to="/formikYup">Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="nav-active" to="/formikComponents">Formik
                                Components</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="nav-active" to="/formikAbstraction">Formik
                                Abstraction</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="nav-active" to="/dynamicForm">Dynamic Form
                            </NavLink>
                        </li>

                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/formikBasic">
                        <FormikBasicPage/>
                    </Route>
                    <Route path="/formikYup">
                        <FormikYupPage/>
                    </Route>
                    <Route path="/register">
                        <RegisterPage/>
                    </Route>
                    <Route path="/formikComponents">
                        <FormikComponentsPage/>
                    </Route>
                    <Route path="/formikAbstraction">
                        <FormikAbstraction/>
                    </Route>
                    <Route path="/registerFormik">
                        <RegisterFormikPage/>
                    </Route>
                    <Route path="/dynamicForm">
                        <DynamicForm/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
