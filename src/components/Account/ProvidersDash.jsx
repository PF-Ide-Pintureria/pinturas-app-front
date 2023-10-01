import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProviders } from '../../redux/actions/Providers/getProviders'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import CreateProviderButton from './ProvidersButtons/CreateProviderButton'
import DeleteProviderButton from './ProvidersButtons/DeleteProviderButton'
import EditProviderButton from './ProvidersButtons/EditProviderButton'

const ProvidersDash = () => {
  const dispatch = useDispatch()
  const providers = useSelector(state => state.providers)

  useEffect(() => {
    dispatch(getProviders())
  }, [dispatch, providers])

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100
    },
    {
      field: 'name',
      headerName: 'Nombre',
      width: 200
    },
    {
      field: 'discount',
      headerName: 'Descuento',
      width: 150
    },
    {
      field: 'markup',
      headerName: 'Ganancia',
      width: 150
    },
    {
      field: 'status',
      headerName: 'Estado',
      width: 150
    },
    {
      field: 'edit',
      headerName: 'Editar',
      width: 150,
      renderCell: (params) => (
        <EditProviderButton providerId={params.row.id} />
      )
    },
    {
      field: 'delete',
      headerName: 'Eliminar',
      width: 150,
      // SOLO MUESTRO EL BOTON ELIMINAR SI EL PROVEEDOR ESTA ACTIVO
      renderCell: (params) => (
        params.row.status === 'Activo' ? <DeleteProviderButton providerId={params.row.id} /> : <></>
      )
    }

  ]
  return (
    <div>
      <div className="justify-end">
        <CreateProviderButton />
      </div>
      <div className="w-full">
        <DataGrid
          rows={providers.map(provider => ({
            id: provider.id,
            name: provider.name,
            discount: provider.discount,
            markup: provider.markup,
            status: provider.active ? 'Activo' : 'Inactivo'
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

export default ProvidersDash
