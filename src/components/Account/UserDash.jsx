import React, { useEffect } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions/User/getAllUsers'
import DeleteUserButton from '../../components/DeleteButton/DeleteUserButton'
import UpdateUserButton from '../../components/UpdateButton/UpdateUserButton'
import BanUserButton from '../../components/DeleteButton/BanUserButton'

const UsersDash = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getAllUsers()(dispatch)
  }, [dispatch])

  const users = useSelector(state => state.allUsers)
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50
    },
    {
      field: 'name',
      headerName: 'Nombre',
      width: 160
    },
    {
      field: 'lastName',
      headerName: 'Apellido',
      width: 160
    },
    {
      field: 'rol',
      headerName: 'Rol',
      width: 80
    },
    {
      field: 'status',
      headerName: 'Estado',
      width: 80
    },
    {
      field: 'address',
      headerName: 'Direccion',
      width: 180
    },
    {
      field: 'locality',
      headerName: 'Localidad',
      width: 160
    },
    {
      field: 'province',
      headerName: 'Provincia',
      width: 160
    },
    {
      field: 'edit',
      headerName: 'Editar',
      width: 120,
      sorteable: false,
      renderCell: (params) => (
                <UpdateUserButton idUser={params.row.id} />
      )
    },
    {
      field: 'delete',
      headerName: 'Eliminar',
      width: 120,
      sorteable: false,
      renderCell: (params) => (
                <DeleteUserButton idUser={params.row.id} />
      )
    },
    {
      field: 'ban',
      headerName: 'Bloquear',
      width: 120,
      sorteable: false,
      renderCell: (params) => (
                <BanUserButton idUser={params.row.id} />
      )
    }
  ]

  return (
        <div className="w-full">
            <DataGrid
                rows={users.map(user => ({
                  id: user.id,
                  name: user.name,
                  lastName: user.lastName,
                  rol: user.rol,
                  status: user.active ? 'Activo' : 'Inactivo',
                  address: user.address,
                  locality: user.locality,
                  province: user.province
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
  )
}

export default UsersDash
