import ContactForm from "../../components/ContactForm/ContactForm";
import style from './Contact.module.css';
import React from 'react';

const Contact = () => {
    return (
        <div className={style.container}>
            <ContactForm />
        </div>
    );
}

export default Contact;