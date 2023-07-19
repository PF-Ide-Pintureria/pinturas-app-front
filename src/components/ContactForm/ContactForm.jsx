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
        <div className={style.container}>
            <div className={style.background}>
                <h2 className='text-primary uppercase font-bold text-3xl'>Contáctanos</h2>
                <form className='' onSubmit={handleSubmit}>
                    <label className='bg-quaternary rounded-xl w-40 h-8' htmlFor="name">Nombre: </label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="text" name="name" value={inputs.name} onChange={handleChange} />
                    {errors.name ? <label>{errors.name}</label> : <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler  icon-tabler-checks" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                    </svg>}
                    <label className='bg-quaternary rounded-xl w-40 h-8' htmlFor="email">Email: </label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="email" name='email' value={inputs.email} onChange={handleChange} />
                    {errors.email ? <label>{errors.email}</label> : <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler  icon-tabler-checks" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                    </svg>}
                    <label htmlFor="message">Mensaje: </label>
                    <textarea  className='bg-formBg' rows='5' name='message' cols='30' placeholder='Escribe tu mensaje...' value={inputs.message} onChange={handleChange}></textarea>
                    <button className='border-solid border border-secondary bg-primary text-tertiary' type='submit'>Enviar</button>
                </form>
                </div>
            </div>
    )
}

export default ContactForm;