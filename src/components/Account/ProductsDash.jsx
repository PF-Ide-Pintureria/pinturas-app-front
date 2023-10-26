import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CreateButton from '../CreateButton/CreateButton.jsx'
import UpdateButton from '../UpdateButton/UpdateButton.jsx'
import DeleteButton from '../DeleteButton/DeleteButton.jsx'
import UpdatePricesButton from '../UpdatePricesButton/UpdatePricesButton.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsNoFilter } from '@redux/actions/Products/getAllProductsNoFilter.js'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

const ProductsDash = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.allProducts)

  useEffect(() => {
    getAllProductsNoFilter()(dispatch)
  }, [dispatch])

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 0.2,
      minWidth: 40
    },
    {
      field: 'name',
      headerName: 'Nombre',
      flex: 2,
      minWidth: 120
    },
    {
      field: 'category',
      headerName: 'Categoría',
      flex: 3,
      minWidth: 180
    },
    {
      field: 'package',
      headerName: 'Formato',
      flex: 0.8,
      minWidth: 80
    },
    {
      field: 'stock',
      headerName: 'Stock',
      flex: 0.9,
      minWidth: 60
    },
    {
      field: 'edit',
      headerName: 'Editar',
      renderCell: (params) => (<UpdateButton idProduct={params.row.id} />),
      flex: 4,
      minWidth: 200
    },
    {
      field: 'delete',
      headerName: 'Eliminar',
      renderCell: (params) => (<DeleteButton idProduct={params.row.id} />),
      flex: 4,
      minWidth: 200
    }

  ]

  return (
        <div className="container mx-auto px-4">

                <CreateButton />
                <UpdatePricesButton/>

            <div className="flex">
                <DataGrid
                    rows={products.map(product => ({
                      id: product.idProduct,
                      name: product.name,
                      category: product.category,
                      package: product.package,
                      stock: product.stock
                    }))}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          page: 0,
                          pageSize: 15
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

            <div className="flex justify-between m-10">
                <Link to="/products">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Ir a buscar Productos
                    </button>
                </Link>
            </div>
        </div>
  )
}

export default ProductsDash
