import React from "react";
import { putUser } from "../../redux/actions/User/putUser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const BanUserButton = ({ idUser }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const formData = new FormData();
    // formData.append('isBanned', true);
    // formData.append('active', false);
    const formData = {
        isBanned: true,
        active: false
    };

    const handleClick = async (event) => {
        event.preventDefault();
        await putUser(idUser, formData)(dispatch);
        Swal.fire('Usuario Banneado');
        // navigate('/account');
    }

    return (
        <div>
            <button onClick={handleClick}>Banear</button>
        </div>
    )
}

export default BanUserButton;