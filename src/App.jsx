import React from "react";
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
import Reviews from "./views/Reviews/Reviews";
import Favorite from "./views/Profile/Favorite/Favorite";
import Register from "./views/Register/Register";
import Purchases from "./views/Purchases/Purchases";

function App() {
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/blog" element={<AdminBlog />} />
        <Route path="/admin/create" element={<CreateProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/buying" element={<Purchases />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/login/register" element={<Register />} />

        {/* <Route path="/account" element={<AdminDashboard />} /> */}
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
