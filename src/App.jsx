import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import About from './views/About/About'
import NavBar from './components/NavBar/NavBar'
import Contact from './views/Contact/Contact'
import Detail from './views/Detail/Detail'
import Footer from './components/Footer/Footer'
import Cart from './views/Cart/Cart'
import Blog from './views/Blog/Blog'
import Products from './views/Products/Products'
import Account from './views/Account/Account'
import UpdateProduct from './views/UpdateProduct/UpdateProduct'
import CreateProduct from './views/CreateProduct/CreateProduct'
import Developers from './views/Developers/Developers'
import Register from './views/Register/Register'
import Purchases from './views/Purchases/Purchases'
import NotFound from './views/NotFound/NotFound'
import SuccessfulPayment from './views/Payment/SuccessfulPayment'
import FailurePayment from './views/Payment/FaillurePayment'
import PendingPayment from './views/Payment/PendingPayment'
import Login from './views/Login/Login'
import ReviewsPage from './views/ReviewsPage/ReviewsPage'
import { useCart } from './hooks/useCart'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './redux/actions/User/setUser'
import { allProducts } from './redux/actions/Products/allProducts'
import UpdateUserFormByAdmin from '@components/UpdateUserFormByAdmin/UpdateUserFormByAdmin'
import { getCart } from './redux/actions/Cart/getCart'
import OrderDetail from './views/OrderDetail/OrderDetail'
import Dashboard from './views/Dashboard/Dashboard'
import BlogCreate from './views/Blog/BlogCreate'
import EditBlog from './views/Blog/EditBlog'
import BlogDetail from './views/Blog/BlogDetail'
import UserOrderDetail from './views/UserOrderDetail/UserOrderDetail'
import ChatBotApp from './components/ChatBot/ChatBotApp'
import { addCart } from './redux/actions/Cart/addCart'
import UpdatePrices from './views/UpdatePrices/UpdatePrices'
import CreateProvider from './views/Providers/CreateProvider'
import EditProvider from './views/Providers/EditProvider'
import ScrollToTop from './hooks/ScrollToTop'

function App () {
  const dispatch = useDispatch()

  const userDb = useSelector((state) => state.user)
  const { addAllToCart } = useCart()
  const user = localStorage.getItem('user')
  const cartLocalS = localStorage.getItem('cart')

  useEffect(() => {
    if (cartLocalS) dispatch(addCart(JSON.parse(cartLocalS)))

    if (user) dispatch(setUser(JSON.parse(user)))

    dispatch(allProducts())
  }, [])

  useEffect(() => {
    if (Object.keys(userDb).length !== 0) {
      dispatch(getCart(JSON.parse(user)?.id)).then((response) => {
        if (response) {
          addAllToCart(response)
        }
      })
    }
  }, [user])

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <div className="h-full w-full">
          <div className="">
            <header>
              <NavBar />
            </header>
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route path="/products" element={<Products />} />
              <Route path="/products/:idProduct" element={<Detail />} />
              <Route path="/products/edit/:idProduct" element={<UpdateProduct/>}
              />

              <Route path="/login" element={<Login />} />
              <Route path="/login/register" element={<Register />} />

              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/create" element={<CreateProduct />} />
              <Route path="/admin/edit/:idUser" element={<UpdateUserFormByAdmin />} />
              <Route path="/admin/products/update/prices" element={<UpdatePrices />} />
              <Route path="/admin/providers/create" element={<CreateProvider />} />
              <Route path="/admin/providers/edit/:id" element={<EditProvider />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/cart/buying" element={<Purchases />} />
              <Route path="/cart/detail" element={<OrderDetail />} />

              <Route path="/orders/:idOrder" element={<UserOrderDetail />} />

              <Route path="/payment/successful" element={<SuccessfulPayment />} />
              <Route path="/payment/failure" element={<FailurePayment />} />
              <Route path="/payment/pending" element={<PendingPayment />} />

              <Route path="/reviews/:orderId" element={<ReviewsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={<Account />} />
              <Route path="/about" element={<About />} />
              <Route path="/developers" element={<Developers />} />

              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:idBlog" element={<BlogDetail />} />
              <Route path="/blog/create" element={<BlogCreate />} />
              <Route path="/blog/edit/:id" element={<EditBlog />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <footer className="flex">
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
      <ChatBotApp />
    </div>
  )
}

export default App
