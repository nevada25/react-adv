import {FormEvent} from "react";

import {useForm} from "../hooks/useForm";

import '../styles/styles.css';

export const RegisterPage = () => {
    const {name, email, password1, password2, formData, onChange, resetForm, isValidEmail} = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        console.log(formData);
    }
    return (
        <div>
            <h1>Register page</h1>
            <form onSubmit={handleSubmit} noValidate>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={name}
                    onChange={onChange}
                    autoComplete="off"
                    className={`${(name.trim().length <= 0) && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    autoComplete="off"
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Email no valido</span>}
                <input
                    type="password"
                    name="password1"
                    autoComplete="off"
                    placeholder="Password"
                    value={password1}
                    onChange={onChange}
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 &&
                    <span>La Contraseña debe de tener 6 letras</span>}
                <input
                    type="password"
                    name="password2"
                    autoComplete="off"
                    placeholder="Repeat Password"
                    value={password2}
                    onChange={onChange}
                />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password1 !== password2 &&
                    <span>Las contraseñas deben de ser iguales</span>}
                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset</button>
            </form>
        </div>
    );
}
