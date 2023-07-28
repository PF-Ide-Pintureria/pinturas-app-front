import React, { useState } from "react";
import SideBar from "../../components/Account/Sidebar";
import LoadingScreen from "../../components/Account/LoadingScreen";
import Dashboard from "../../components/Account/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import UpdateUserForm from "../../components/Account/UpdateUserForm";
import Addresses from "../../components/Account/Addresses";
import Favorities from "../../components/Account/Favorites";
import Orders from "../../components/Account/Orders";
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
  const navigate = useNavigate();

  const loggedUser = useSelector((state) => state.user);
  
  
  const handleButtonClick = (buttonName) => {
    if (buttonName === "account"){ 
      setDashboard(true);
      setUpdateUserForm(true);
      setAddresses(false);
      setFavorities(false);
      setOrders(false);
      setActiveButton(buttonName);

    }
    if (buttonName === "userForm"){
      setDashboard(false);
      setUpdateUserForm(true);
      setAddresses(false);
      setFavorities(false);
      setOrders(false);
      setActiveButton(buttonName);
    }
    if (buttonName === "addresses"){ 
      setDashboard(false);
      setUpdateUserForm(false);
      setAddresses(true);
      setFavorities(false);
      setOrders(false);
      setActiveButton(buttonName);
    }
    if (buttonName === "favorities"){ 
      setDashboard(false);
      setUpdateUserForm(false);
      setAddresses(false);
      setFavorities(true);
      setOrders(false);
      setActiveButton(buttonName);
    }
    if (buttonName === "orders"){ 
      setDashboard(false);
      setUpdateUserForm(false);
      setAddresses(false);
      setFavorities(false);
      setOrders(true);
      setActiveButton(buttonName);}

  };
  if(loggedUser.id){
  return (
    <div>
      <h1 className="bg-red-700 w-72 h-72 text-yellow-400">HOLA K TAL VINE PRIMERO</h1>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {console.log("HOLA K TAL")}
          <SideBar
            isAuthenticated={isAuthenticated}
            user={user}
            activeButton={activeButton}
            handleButtonClick={handleButtonClick}
            logout={logout}
          />
          <div className="w-9/12" style={{ flex: "1" }}>
            <LoadingScreen isLoading={isLoading} />

            {/* {dashboard && <Dashboard /> } */}
            { updateUserForm && <UpdateUserForm /> }
            { addresses && <Addresses /> }
            { favorities && <Favorities /> }
            { orders && <Orders /> }

            {/* <Dashboard isAuthenticated={isAuthenticated} /> */}
            <footer style={{ textAlign: "center", padding: "10px" }}></footer>
          </div>
        </div>
      
    
    </div>
  );}
  else{
    return (
        <div className="pb-36 pt-20 my-20 flex items-center justify-center lg:mt-0 mr:auto h-full">
          <LoginForm />
        </div>
    )
  }
};

export default Account;
