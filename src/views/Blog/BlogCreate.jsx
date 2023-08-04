import React from "react";
import { Formik, Field, Form } from "formik";
import { useFormik, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

const BlogCreate = () => {
    return (
        <div>
            <div className="flex flex-col justify-start">
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
                        <div className="flex justify-around">
                            <Form className="blog-dash flex flex-col border border-solid border-primary rounded-xl mt-2 mb-2">
                                <h1 className="flex justify-center font-extrabold text-3xl text-primary py-8">Crea una entrada de Blog!</h1>
                                <div className=" flex m-8 mb-0">
                                    <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Título</label>
                                    <Field className="bg-formBg rounded-r-lg w-72 h-8" type='text' name='title' />
                                    <ErrorMessage name='title' component='div' />
                                </div>
                                <div className=" flex m-8 mb-0">
                                    <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Imágen</label>
                                    <Field className="bg-formBg rounded-r-lg w-72 h-8" type='file' name='image' />
                                    <ErrorMessage name='image' component='div' />
                                </div>
                                <div className=" flex m-8 mb-0">
                                    <label htmlFor="" className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Cuerpo</label>
                                    <Field className="bg-formBg rounded-r-lg w-72 h-8" type='textarea' name='body' />
                                    <ErrorMessage name='body' component='div' />
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </div >
    )
}

export default BlogCreate;