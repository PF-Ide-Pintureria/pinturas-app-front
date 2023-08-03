import React, { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import getAllOrders from "../../redux/actions/Orders/getAllOrders";

const SalesDash = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getAllOrders()(dispatch)
        console.log('traemos las ventas')
    }, [dispatch])
    const orders = useSelector(state => state.allOrders);

    console.log('orders: ', orders)

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 50
        },
        {
            field: 'name',
            headerName: 'Nombre',
            width: 100
        },
        {
            field: 'lastName',
            headerName: 'Apellido',
            width: 100
        },
        {
            field: 'rol',
            headerName: 'Rol',
            width: 80
        },
        {
            field: 'status',
            headerName: 'Estado',
            width: 90
        },
        {
            field: 'edit',
            headerName: 'Editar',
            width: 90,
            sorteable: false,
            renderCell: (params) => (
                <UpdateUserButton idUser={params.row.id} />
            )
        },
        {
            field: 'delete',
            headerName: 'Eliminar',
            width: 90,
            sorteable: false,
            renderCell: (params) => (
                <DeleteUserButton idUser={params.row.id} />
            )
        },
        {
            field: 'ban',
            headerName: 'Bloquear',
            width: 90,
            sorteable: false,
            renderCell: (params) => (
                <BanUserButton idUser={params.row.id} />
            )
        },
    ]

    return (
        <div className="w-full">
            <DataGrid
                rows={users.map(user => ({
                    id: user.id,
                    name: user.name,
                    lastName: user.lastName,
                    rol: user.rol,
                    status: user.active ? "Activo" : "Inactivo",
                }))}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            page: 0,
                            pageSize: 10
                        }
                    }
                }}
                pageSizeOptions={[5, 10, 100]}
            />
        </div>
    )
}

export default SalesDash;