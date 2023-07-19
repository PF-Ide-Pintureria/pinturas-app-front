import React from 'react';
import {useState} from 'react';
import style from './ContactForm.module.css';
import formValidation from './formValidation';

const ContactForm = () => {

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: ''
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setInputs({ ...inputs, [property]: value })
        setErrors(formValidation({ ...inputs, [property]: value }))
    }

    const handleSubmit = async (event) => {
        // enviar datos a servidor...
        event.preventDefault();
        alert('Mensaje enviado')
    }

    return (
        <div>
            <h2 className={style.title}>Contáctanos</h2>
            <form className={style.container} onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre: </label>
                <input type="text" name="name" value={inputs.name} onChange={handleChange} />
                {errors.name ? <label>{errors.name}</label> : <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler  icon-tabler-checks" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 12l5 5l10 -10" />
                <path d="M2 12l5 5m5 -5l5 -5" />
                </svg>}
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' value={inputs.email} onChange={handleChange} />
                {errors.email ? <label>{errors.email}</label> : <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler  icon-tabler-checks" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 12l5 5l10 -10" />
                <path d="M2 12l5 5m5 -5l5 -5" />
                </svg>}
                <label htmlFor="message">Mensaje: </label>
                <textarea rows='5' name='message' cols='30' placeholder='Escribe tu mensaje...' value={inputs.message} onChange={handleChange}></textarea>
                <button className={style.button} type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default ContactForm;