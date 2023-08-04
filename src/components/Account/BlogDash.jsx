import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import getPosts from "../../redux/actions/Blog/getPosts";
import EditBlogButton from "./Blog/EditBlogButton";
import DeleteBlogButton from "./Blog/DeleteBlogButton";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CreateBlogButton from "./Blog/CreateBlogButton";


const BlogDash = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getPosts()(dispatch);
    }, [dispatch])
    // const posts = useSelector(state => state.posts);
    const posts = [
        {
            id: 1,
            title: 'Post 1',
            author: 'Autor 1',
            date: 'septiembre 30 del año pasado',
            active: true
        },
        {
            id: 2,
            title: 'Post 2',
            author: 'Autor 2',
            date: 'Octubre 30 del año pasado',
            active: false
        },
        {
            id: 3,
            title: 'Post 3',
            author: 'Autor 3',
            date: 'Noviembre 30 del año pasado',
            active: true
        },
        {
            id: 4,
            title: 'Post 4',
            author: 'Autor 4',
            date: 'Diciembre 30 del año pasado',
            active: true
        },
    ]

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100
        },
        {
            field: 'title',
            headerName: 'Titulo',
            width: 200
        },
        {
            field: 'author',
            headerName: 'Autor',
            width: 200
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },
        {
            field: 'date',
            headerName: 'Fecha de publicacion',
            width: 150
        },
        {
            field: 'edit',
            headerName: 'Editar',
            width: 150,
            renderCell: (params) => {
                <EditBlogButton idBlog={params.row.id} />
            }
        },
        {
            field: 'delete',
            headerName: 'Eliminar',
            width: 150,
            renderCell: (params) => {
                <DeleteBlogButton idBlog={params.row.id} />
            }
        },

    ]
    return (
        <div>
            <div className="justify-end">
                <CreateBlogButton />
            </div>
            <div className="w-full">
                <DataGrid
                    rows={posts.map(post => ({
                        id: post.id,
                        title: post.title,
                        author: post.author,
                        date: post.date,
                        status: post.active ? "Activo" : "Inactivo",
                    }))}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                page: 0,
                                pageSize: 10
                            }
                        },
                        sorting: true,
                        filter: {
                            filterModel: {
                                items: [],
                            }
                        }
                    }}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true
                        }
                    }}
                    disableColumnFilter
                    pageSizeOptions={[5, 10, 15, 20, 50, 100]}
                />
            </div>
        </div>
    )
};

export default BlogDash;