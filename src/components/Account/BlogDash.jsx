import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getPosts from '../../redux/actions/Blog/getPosts'
import EditBlogButton from './Blog/EditBlogButton'
import DeleteBlogButton from './Blog/DeleteBlogButton'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import CreateBlogButton from './Blog/CreateBlogButton'

const BlogDash = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    getPosts()(dispatch)
  }, [dispatch, posts])

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
      field: 'description',
      headerName: 'Descripcion',
      width: 200
    },
    {
      field: 'author',
      headerName: 'Autor',
      width: 40
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150
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
      renderCell: (params) => (
        <EditBlogButton idBlog={params.row.id} />
      )
    },
    {
      field: 'delete',
      headerName: 'Eliminar',
      width: 150,
      renderCell: (params) => (
        <DeleteBlogButton idBlog={params.row.id} />
      )
    }

  ]
  return (
    <div>
      <div className="justify-end">
        <CreateBlogButton />
      </div>
      <div className="w-full">
        <DataGrid
          rows={posts.map(post => ({
            id: post.idBlog,
            title: post.title,
            author: post.userId,
            description: post.description,
            date: post.createdAt,
            status: post.active ? 'Activo' : 'Inactivo'
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
                items: []
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
}

export default BlogDash
