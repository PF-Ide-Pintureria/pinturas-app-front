import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import Swal from 'sweetalert2'


const BlogDash = () => {
    return (
        <div>
            <div>
                <h1>Crea una entrada de Blog!</h1>
                <Formik
                    initialValues={{ title: '', image: '', body: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.title) {
                            errors.title = 'Por favor ingresa un titulo';
                        }
                        else if (values.body === '') {
                            errors.body = 'Por favor escribe algo en el cuerpo del blog'
                        };
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        Swal.fire('Blog creado');
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="blog-dash">
                            <Field type='text' name='title' />
                            <ErrorMessage name='title' component='div' />
                            <Field type='file' name='image' />
                            <ErrorMessage name='image' component='div' />
                            <Field type='textarea' name='body' />
                            <ErrorMessage name='body' component='div' />

                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    )
};

export default BlogDash;