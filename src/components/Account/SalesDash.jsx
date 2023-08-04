import React, { useEffect } from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import getAllOrders from "../../redux/actions/Orders/getAllOrders";

const SalesDash = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getAllOrders()(dispatch)
    }, [dispatch])
    const orders = useSelector(state => state.allOrders);

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 50
        },
        {
            field: 'date',
            headerName: 'Fecha',
            width: 100
        },
        {
            field: 'userId',
            headerName: 'Usuario',
            width: 100
        },
        {
            field: 'total',
            headerName: 'Total',
            width: 80
        },
        {
            field: 'state',
            headerName: 'Estado',
            width: 90
        },
    ]

    return (
        <div className="w-full">
            <DataGrid
                rows={orders.map(order => ({
                    id: order.id,
                    date: order.createdAt,
                    userId: order.userId,
                    total: order.total,
                    state: order.state,
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
    )
}

export default SalesDash;