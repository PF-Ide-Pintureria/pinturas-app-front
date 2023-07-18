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
        event.preventDefault();
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
                <input type="text" id="name" value={inputs.name} onChange={handleChange} />
                <label htmlFor="email">Email: </label>
                <input type="email" value={inputs.email} onChange={handleChange} />
                <label htmlFor="message">Mensaje: </label>
                <textarea rows='5' cols='30' placeholder='Escribe tu mensaje...' value={inputs.message} onChange={handleChange}></textarea>
                <button className={style.button} type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default ContactForm;