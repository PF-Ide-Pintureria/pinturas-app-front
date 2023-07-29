import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Auth0Provider } from "@auth0/auth0-react";
import { CartProvider } from "./context/cart";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <Auth0Provider
            domain="dev-0nawgxvbxbmfnvw2.us.auth0.com"
            clientId="w3p283H646O3OmbUMppYSR69WvAv86AJ"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <CartProvider>
                <App />
            </CartProvider>
        </Auth0Provider>
    </Provider>
);
