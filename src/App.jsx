import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import About from './views/About/About'
import NavBar from './components/NavBar/NavBar'
import Contact from './views/Contact/Contact'
import Detail from './views/Detail/Detail'
import Footer from './components/Footer/Footer'
import Cart from './views/Cart/Cart'
import Blog from './views/Blog/Blog'
// import Login from "./views/Login/Login";
import Products from './views/Products/Products'
import AdminUsers from './views/Admin/AdminUsers/AdminUsers'
import AdminProducts from './views/Admin/AdminProducts/AdminProducts'
import AdminBlog from './views/Admin/AdminBlog/AdminBlog'
import Account from './views/Account/Account'
import UpdateProduct from './views/UpdateProduct/UpdateProduct'
import CreateProduct from './views/CreateProduct/CreateProduct'
import Developers from './views/Developers/Developers'
import Location from './views/Location/Location'
import Favorite from './views/Profile/Favorite/Favorite'
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
import TestTable from './TestTable'
import UpdateUserForm from './components/UpdateForm/UpdateUserForm'
import { getCart } from './redux/actions/Cart/getCart'
import OrderDetail from './views/OrderDetail/OrderDetail'
import Dashboard from './views/Dashboard/Dashboard'
import BlogCreate from './views/Blog/BlogCreate'
import EditBlog from './views/Blog/EditBlog'
import BlogDetail from './views/Blog/BlogDetail'
import UserOrderDetail from './views/UserOrderDetail/UserOrderDetail'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
import { steps } from '../src/assets/steps'
import { theme } from '../src/assets/theme'
import { SiChatbot } from 'react-icons/si'
import person from '../src/img/user.jpg'
import { addCart } from './redux/actions/Cart/addCart'

function App () {
  const dispatch = useDispatch()
  const [showChatbot, setShowChatbot] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const userDb = useSelector((state) => state.user)
  const {
    addAllToCart
  } = useCart()
  const user = localStorage.getItem('user')
  const cartLocalS = localStorage.getItem('cart')

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot)
    setShowButton(false)
  }

  const hideChatbot = () => {
    setShowChatbot(false)
    setShowButton(true)
  }

  useEffect(() => {
    if (cartLocalS) dispatch(addCart(JSON.parse(cartLocalS)))

    if (user) dispatch(setUser(JSON.parse(user)))

    dispatch(allProducts())
  }, [])

  useEffect(() => {
    if (userDb) {
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
        <div className="h-full w-full">
          <div className="">
            <header>
              <NavBar />
            </header>
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route path="/products" element={<Products />} />
              <Route path="/products/:idProduct" element={<Detail />} />
              <Route
                path="/products/edit/:idProduct"
                element={<UpdateProduct />}
              />

              <Route path="/login" element={<Login />} />
              <Route path="/login/register" element={<Register />} />

              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/products" element={<AdminProducts />} />
              <Route path="/admin/blog" element={<AdminBlog />} />
              <Route path="/admin/create" element={<CreateProduct />} />
              <Route path="/admin/edit/:idUser" element={<UpdateUserForm />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/cart/buying" element={<Purchases />} />
              <Route path="/cart/detail" element={<OrderDetail />} />

              <Route
                path="/payment/successful"
                element={<SuccessfulPayment />}
              />
              <Route path="/payment/failure" element={<FailurePayment />} />
              <Route path="/payment/pending" element={<PendingPayment />} />

              <Route path="/reviews/:orderId" element={<ReviewsPage />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={<Account />} />
              <Route path="/about" element={<About />} />
              <Route path="/location" element={<Location />} />

              <Route path="/orders/:idOrder" element={<UserOrderDetail />} />

              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:idBlog" element={<BlogDetail />} />
              <Route path="/blog/create" element={<BlogCreate />} />
              <Route path="/blog/edit/:id" element={<EditBlog />} />

              <Route path="/developers" element={<Developers />} />

              <Route path="/testing" element={<TestTable />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <footer className="flex">
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
      <ThemeProvider theme={theme}>
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999
          }}
        >
          {showButton && (
            <button
              className="bg-purple-100 text-primary text-3xl font-semibold mb-2 px-3 py-3 rounded-full mr-2 hover:scale-125"
              onClick={toggleChatbot}
            >
              <SiChatbot />
            </button>
          )}
          {showChatbot && (
            <div style={{ position: 'relative' }}>
              <ChatBot
                steps={steps}
                headerTitle="Chatbot"
                userAvatar={person}
              />
              <button
                className="text-white hover:text-white-900 text-m mr-5 mt-3"
                onClick={hideChatbot}
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'right 1s ease-in-out',
                  zIndex: 9999
                }}
              >
                X
              </button>
            </div>
          )}
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
