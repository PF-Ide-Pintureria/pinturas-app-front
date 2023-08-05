// import React, { useEffect } from "react";
// import { DataGrid } from '@mui/x-data-grid';
// import { useDispatch, useSelector } from "react-redux";
// import { getAllUsers } from "./redux/actions/getAllUsers";
// import DeleteUserButton from "./components/DeleteButton/DeleteUserButton";
// import UpdateUserButton from "./components/UpdateButton/UpdateUserButton";
// import BanUserButton from "./components/DeleteButton/BanUserButton";

// const TestTable = () => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         getAllUsers()(dispatch)
//         console.log('traemos los usuarios')
//     }, [dispatch])
//     const users = useSelector(state => state.allUsers);

//     console.log('Users: ', users)

//     const columns = [
//         {
//             field: 'id',
//             headerName: 'ID',
//             width: 70
//         },
//         {
//             field: 'name',
//             headerName: 'Nombre',
//             width: 130
//         },
//         {
//             field: 'lastName',
//             headerName: 'Apellido',
//             width: 130
//         },
//         {
//             field: 'rol',
//             headerName: 'Rol',
//             width: 90
//         },
//         {
//             field: 'status',
//             headerName: 'Estado',
//             width: 90
//         },
//         {
//             field: 'edit',
//             headerName: 'Editar',
//             width: 90,
//             sorteable: false,
//             renderCell: (params) => (
//                 <UpdateUserButton idUser={params.row.id} />
//             )
//         },
//         {
//             field: 'delete',
//             headerName: 'Eliminar',
//             width: 90,
//             sorteable: false,
//             renderCell: (params) => (
//                 <DeleteUserButton idUser={params.row.id} />
//             )
//         },
//         {
//             field: 'ban',
//             headerName: 'Exiliar',
//             width: 90,
//             sorteable: false,
//             renderCell: (params) => (
//                 <BanUserButton idUser={params.row.id} />
//             )
//         },
//     ]

//     return (
//         <div className="w-full">
//             <DataGrid
//                 rows={users.map(user => ({
//                     id: user.id,
//                     name: user.name,
//                     lastName: user.lastName,
//                     rol: user.rol,
//                     status: user.active ? "Activo" : "Inactivo",
//                 }))}
//                 columns={columns}
//                 initianState={{
//                     pagination: {
//                         paginationModel: {
//                             page: 0,
//                             pageSize: 10
//                         }
//                     }
//                 }}
//                 pageSizeOptions={[5, 10, 100]}
//             />
//         </div>
//     )
// }

// export default TestTable;

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