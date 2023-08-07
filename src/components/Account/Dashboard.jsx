import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import login from "../../img/login-img.jpeg";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import { setUserData } from "../../redux/actions/User/postAuthzeroUsers";

const Dashboard = ({ isAuthenticated, user, setUserData }) => {
  const {
    isAuthenticated: auth0IsAuthenticated,
    // loginWithRedirect: auth0LoginWithRedirect,
    user: auth0User,
  } = useAuth0();

  if (auth0IsAuthenticated) {
    // Guardar en cookies
    Cookies.set("userData", JSON.stringify(auth0User), { expires: 31 });
    // Guardar en Redux
    setUserData(auth0User);
  }

  return (
    <div>
      <div>
        <p className="flex items-center space-x-3 text-gray-400 p-2">
          Panel de Usuario de {user.name}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userData !== null,
    user: state.userData,
  };
};

const mapDispatchToProps = {
  setUserData: setUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
