import React, { useState } from "react";
import SideBar from "../../components/Account/Sidebar";
import LoadingScreen from "../../components/Account/LoadingScreen";
import Dashboard from "../../components/Account/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { isAuthenticated, user, logout, isLoading } = useAuth0();
  const [activeButton, setActiveButton] = useState("dashboard");
  const navigate = useNavigate();



export default Account;
