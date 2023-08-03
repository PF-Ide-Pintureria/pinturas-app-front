import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./views/Contact/Contact";
import Detail from "./views/Detail/Detail";
import Footer from "./components/Footer/Footer";
import Cart from "./views/Cart/Cart";
import Blog from "./views/Blog/Blog";
// import Login from "./views/Login/Login";
import Products from "./views/Products/Products";
import AdminDashboard from "./views/Admin/AdminDashboard/AdminDashboard";
import AdminUsers from "./views/Admin/AdminUsers/AdminUsers";
import AdminProducts from "./views/Admin/AdminProducts/AdminProducts";
import AdminBlog from "./views/Admin/AdminBlog/AdminBlog";
import Account from "./views/Account/Account";
import UpdateProduct from "./views/UpdateProduct/UpdateProduct";
import CreateProduct from "./views/CreateProduct/CreateProduct";
import Developers from "./views/Developers/Developers";
import Location from "./views/Location/Location";
import Profile from "./views/Profile/Profile";
import Favorite from "./views/Profile/Favorite/Favorite";
import Register from "./views/Register/Register";
import Purchases from "./views/Purchases/Purchases";
import NotFound from "./views/NotFound/NotFound";
import SuccessfulPayment from "./views/Payment/SuccessfulPayment";
import FailurePayment from "./views/Payment/FaillurePayment";
import PendingPayment from "./views/Payment/PendingPayment";
import Login from "./views/Login/Login";
import ReviewsPage from "./views/ReviewsPage/ReviewsPage";
import DebuggerFooter from "./components/debuggerFooter/debuggerFooter";
const { VITE_NODE_ENV: NODE_ENV } = import.meta.env;
import { useCart } from "./hooks/useCart";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/actions/setUser";
import { allProducts } from "./redux/actions/Products/allProducts";
import { setCart } from "./redux/actions/Cart/setCart";
import TestTable from "./TestTable";
import UpdateUserForm from "./components/UpdateForm/UpdateUserForm";
import { getCart } from "./redux/actions/Cart/getCart";

function App() {
    const dispatch = useDispatch();


    useEffect(() => {
        const user = localStorage.getItem("user");
        const cart = localStorage.getItem("cart");
        if (user) {
            dispatch(setUser(JSON.parse(user)));
            // cartId !== null && dispatch(getCart(cartId));

        }
        if (cart) {
            dispatch(setCart(JSON.parse(cart)));
        }
        dispatch(allProducts());
    }, [])


    return (
        <BrowserRouter>
            <header>
                <NavBar />
            </header>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route path="/products" element={<Products />} />
                <Route path="/products/:idProduct" element={<Detail />} />
                <Route path="/products/edit/:idProduct" element={<UpdateProduct />} />

                <Route path="/login" element={<Login />} />
                <Route path="/login/register" element={<Register />} />


                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/users" element={<AdminUsers />} />
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/blog" element={<AdminBlog />} />
                <Route path="/admin/create" element={<CreateProduct />} />
                <Route path="/admin/edit/:idUser" element={<UpdateUserForm />} />

                <Route path="/cart" element={<Cart />} />
                <Route path="/cart/buying" element={<Purchases />} />

                <Route path="/payment/successful" element={<SuccessfulPayment />} />
                <Route path="/payment/failure" element={<FailurePayment />} />
                <Route path="/payment/pending" element={<PendingPayment />} />

                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/account" element={<Account />} />
                <Route path="/about" element={<About />} />
                <Route path="/location" element={<Location />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/developers" element={<Developers />} />



                <Route path="/testing" element={<TestTable />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <footer>
                {NODE_ENV === 'debugging' && <DebuggerFooter cart={cartState} />}
                <Footer />
            </footer>
        </BrowserRouter>
    );

}

export default App;
