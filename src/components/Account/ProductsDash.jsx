import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CreateButton from '../CreateButton/CreateButton.jsx'
import UpdateButton from '../UpdateButton/UpdateButton.jsx'
import DeleteButton from '../DeleteButton/DeleteButton.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsNoFilter } from '../../redux/actions/Products/getAllProductsNoFilter.js'
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
            {' '}
            <li>
                <p className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className=" text-gray-600">
                        <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"
                            />
                            <path
                                d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path
                                d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path
                                d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>
                    </span>
                    <span>Productos</span>
                </p>
                <CreateButton />
            </li>
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
