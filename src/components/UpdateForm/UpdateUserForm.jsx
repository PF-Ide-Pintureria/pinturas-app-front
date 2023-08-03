import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/getAllUsers";
import { putUser } from "../../redux/actions/User/putUser.js";
import { useParams } from "react-router-dom";
import getUserById from "../../redux/actions/User/getUserById";



const UpdateUserForm = () => {
    const { idUser } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        getUserById(idUser)(dispatch)
    }, [dispatch])
    // useEffect(() => {
    //     console.log('entramos en el primer useEffect')
    //     getAllUsers()(dispatch)
    // }, [dispatch]);
    const findUser = useSelector((state) => state.userId);
    // console.log('fullUsers: ', fullUsers);
    // const findUser = fullUsers?.find((user) => parseInt(user.id) === parseInt(idUser));
    // console.log('findUser: ', findUser)

    const [inputs, setInputs] = useState({
        name: "",
        lastName: "",
        email: "",
        active: true,
        rol: "client",
        authZero: false,
        isBanned: false,
        address: "",
        locality: "",
        province: "",
        phone: "",
    });


    useEffect(() => {
        if (findUser) {

            setInputs({
                name: findUser?.name,
                lastName: findUser?.lastName,
                email: findUser?.email,
                active: findUser?.active,
                rol: findUser?.rol,
                authZero: findUser?.authZero,
                isBanned: findUser?.isBanned,
                address: findUser?.address,
                locality: findUser?.locality,
                province: findUser?.province,
                phone: findUser?.phone,
            });
        }
    }, [findUser]);

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setInputs({ ...inputs, [property]: value })
        console.log(inputs)
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        await putUser(findUser.id, JSON.stringify(inputs))(dispatch).then(response => {
            if (!response) { alert("error") }
        })
        alert('vamos a modificar el usuario');
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className=" flex m-8 mb-0">
                    <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Nombre: </label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={inputs.name}
                        className="bg-formBg rounded-r-lg w-72 h-8"
                    />
                </div>
                <div className=" flex m-8 mb-0">
                    <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Apellido: </label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        value={inputs.lastName}
                        className="bg-formBg rounded-r-lg w-72 h-8"
                    />
                </div>
                <div className=" flex m-8 mb-0">
                    <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Email: </label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={inputs.email}
                        className="bg-formBg rounded-r-lg w-72 h-8"
                    />
                </div>
                <div className=" flex m-8 mb-0">
                    <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Status: </label>
                    <input
                        type="checkbox"
                        name="active"
                        onChange={handleChange}
                        checked={inputs.active}
                        value={inputs.active ? "true" : "false"}
                        className="bg-formBg rounded-r-lg w-72 h-8"
                    />
                </div>
                <div className=" flex m-8 mb-0">
                    <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Rol: </label>
                    <select
                        type="select"
                        name="rol"
                        onChange={handleChange}
                        value={inputs.rol}
                        className="bg-formBg rounded-r-lg w-72 h-8"
                    >
                        <option value="admin">Admin</option>
                        <option value="client">Cliente</option>
                    </select>
                </div>
                <div className=" flex m-8 mb-0">
                    <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Auth0: </label>
                    <input
                        type="checkbox"
                        name="authZero"
                        onChange={handleChange}
                        checked={inputs.authZero}
                        value={inputs.authZero ? "true" : "false"}
                        className="bg-formBg rounded-r-lg w-72 h-8"
                    />
                </div>
                <div className=" flex m-8 mb-0">
                    <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Baneo: </label>
                    <input
                        type="checkbox"
                        name="isBanned"
                        onChange={handleChange}
                        checked={inputs.isBanned}
                        value={inputs.isBanned ? "true" : "false"}
                        className="bg-formBg rounded-r-lg w-72 h-8"
                    />
                </div>
                <div className=" flex m-8 mb-0">
                    <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Dirección: </label>
                    <input
                        type="text"
                        name="address"
                        onChange={handleChange}
                        value={inputs.address ? inputs.address : "no-address"}
                        className="bg-formBg rounded-r-lg w-72 h-8"
                    />
                </div>
                <div className=" flex m-8 mb-0">
                    <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Localidad: </label>
                    <input
                        type="text"
                        name="locality"
                        onChange={handleChange}
                        value={inputs.locality ? inputs.locality : "no-locality"}
                        className="bg-formBg rounded-r-lg w-72 h-8"
                    />
                </div>
                <div className=" flex m-8 mb-0">
                    <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Provincia: </label>
                    <input
                        type="text"
                        name="province"
                        onChange={handleChange}
                        value={inputs.province ? inputs.province : "no-province"}
                        className="bg-formBg rounded-r-lg w-72 h-8"
                    />
                </div>
                {/* <div className=" flex m-8 mb-0">
                    <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Imagen: </label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        value={inputs.image ? inputs.image : "no-image"}
                        className="bg-formBg rounded-r-lg w-72 h-8"
                    />
                </div> */}
                <button
                    type="submit"
                    className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex items-center justify-center"
                ><h2
                    className="text-primary uppercase font-bold flex items-center justify-center"
                    style={{ color: "white", fontWeight: "bold" }}
                >
                        Actualizar usuario
                    </h2>
                </button>
            </form>
        </div>
    )
}

export default UpdateUserForm