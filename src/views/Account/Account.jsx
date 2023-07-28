import React, { useState } from "react";
import SideBar from "../../components/Account/Sidebar";
import LoadingScreen from "../../components/Account/LoadingScreen";
import Dashboard from "../../components/Account/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const Account = () => {
    const { isAuthenticated, user, logout, isLoading } = useAuth0();
    const [activeButton, setActiveButton] = useState("dashboard");
    const navigate = useNavigate();

    const logUser = useSelector(state => state.user);
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

        return (
            <div>
                { !logUser 
                ? (
                <div style={{ display: "flex", minHeight: "100vh" }}>
                    <SideBar
                        isAuthenticated={isAuthenticated}
                        user={user}
                        activeButton={activeButton}
                        handleButtonClick={handleButtonClick}
                        logout={logout}
                    />
                    <div className="w-9/12" style={{ flex: "1" }}>
                        <LoadingScreen isLoading={isLoading} />
                        <Dashboard isAuthenticated={isAuthenticated} />
                        <footer style={{ textAlign: "center", padding: "10px" }}></footer>
                    </div>
                </div>
                ) : (
                    <div className="pb-36 pt-20 my-20 flex items-center justify-center lg:mt-0 mr:auto h-full" >
                        <LoginForm />
                    </div>
                )
                }
            </div>
        );
}

export default Account;
