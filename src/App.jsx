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

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:idProduct" element={<Detail />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
