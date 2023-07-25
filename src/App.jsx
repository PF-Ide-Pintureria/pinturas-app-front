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
import Login from "./views/Login/Login";
import Products from "./views/Products/Products";
import AdminDashboard from "./views/AdminDashboard/AdminDashboard";
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/create" element={<CreateProduct />} />
        <Route path="/products/edit/:idProduct" element={<UpdateProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/account" element={<AdminDashboard />} />
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
