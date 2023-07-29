import React, { useState } from "react";
import SideBarAuth from "../../components/Account/SidebarAuth";
import SideBarUser from "../../components/Account/SideBarUser";
import LoadingScreen from "../../components/Account/LoadingScreen";
import Dashboard from "../../components/Account/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/actions/logoutUser";

import UpdateUserForm from "../../components/Account/UpdateUserForm";
import Addresses from "../../components/Account/Addresses";
import Favorities from "../../components/Account/Favorites";
import Orders from "../../components/Account/Orders";
import ProductsDash from "../../components/Account/ProductsDash";
// import UpdateUserForm from "../../components/Account/UpdateUserForm";

import LoginForm from "../../components/LoginForm/LoginForm";

const Account = () => {
    const { isAuthenticated, user, logout, isLoading } = useAuth0();
    const [activeButton, setActiveButton] = useState("dashboard");
    const [dashboard, setDashboard] = useState(false);
    const [updateUserForm, setUpdateUserForm] = useState(false);
    const [addresses, setAddresses] = useState(false);
    const [favorities, setFavorities] = useState(false);
    const [orders, setOrders] = useState(false);
    const [products, setProducts] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const loggedUser = useSelector((state) => state.user);

    const logoutUserAction = () => {
        logoutUser(dispatch);
        navigate('/');
    }


    const handleButtonClick = (buttonName) => {
        if (buttonName === "account") {
            setDashboard(true);
            setUpdateUserForm(true);
            setAddresses(false);
            setFavorities(false);
            setOrders(false);
            setProducts(false);
            setActiveButton(buttonName);

        }
        if (buttonName === "userForm") {
            setDashboard(false);
            setUpdateUserForm(true);
            setAddresses(false);
            setFavorities(false);
            setOrders(false);
            setProducts(false);
            setActiveButton(buttonName);
        }
        if (buttonName === "addresses") {
            setDashboard(false);
            setUpdateUserForm(false);
            setAddresses(true);
            setFavorities(false);
            setOrders(false);
            setProducts(false);
            setActiveButton(buttonName);
        }
        if (buttonName === "favorities") {
            setDashboard(false);
            setUpdateUserForm(false);
            setAddresses(false);
            setFavorities(true);
            setOrders(false);
            setProducts(false);
            setActiveButton(buttonName);
        }
        if (buttonName === "orders") {
            setDashboard(false);
            setUpdateUserForm(false);
            setAddresses(false);
            setFavorities(false);
            setOrders(true);
            setProducts(false);
            setActiveButton(buttonName);
        }
        if (buttonName === "products") {
            setDashboard(false);
            setUpdateUserForm(false);
            setAddresses(false);
            setFavorities(false);
            setOrders(false);
            setProducts(true);
            setActiveButton(buttonName);
        }

    };
    if (isAuthenticated) {
        return (
            <div>
                <div style={{ display: "flex", minHeight: "100vh" }}>
                    <SideBarAuth
                        isAuthenticated={isAuthenticated}
                        user={user}
                        activeButton={activeButton}
                        handleButtonClick={handleButtonClick}
                        logout={logout}
                    />
                    <div className="w-9/12" style={{ flex: "1" }}>
                        <LoadingScreen isLoading={isLoading} />

                        {/* {dashboard && <Dashboard /> } */}
                        {updateUserForm && <UpdateUserForm />}
                        {addresses && <Addresses />}
                        {favorities && <Favorities />}
                        {orders && <Orders />}

                        {/* <Dashboard isAuthenticated={isAuthenticated} /> */}
                        <footer style={{ textAlign: "center", padding: "10px" }}></footer>
                    </div>
                </div>


            </div>
        );
    }
    else if (loggedUser.id) {
        return (
            <div>
                <div style={{ display: "flex", minHeight: "100vh" }}>
                    <SideBarUser
                        activeButton={activeButton}
                        handleButtonClick={handleButtonClick}
                        user={loggedUser}
                        logout={logoutUserAction}
                    />
                    <div className="w-9/12" style={{ flex: "1" }}>
                        <LoadingScreen isLoading={isLoading} />

                        {/* {dashboard && <Dashboard /> } */}
                        {updateUserForm && <UpdateUserForm />}
                        {addresses && <Addresses />}
                        {favorities && <Favorities />}
                        {orders && <Orders />}
                        {products && <ProductsDash />}

                        {/* <Dashboard isAuthenticated={isAuthenticated} /> */}
                        <footer style={{ textAlign: "center", padding: "10px" }}></footer>
                    </div>
                </div>


            </div>
        );
    }
    else {
        return (
            <div className="pb-36 pt-20 my-20 flex items-center justify-center lg:mt-0 mr:auto h-full">
                <LoginForm />
            </div>
        )
    }
};

export default Account;
