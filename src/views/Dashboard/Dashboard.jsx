import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin'
import UsersDash from '../../components/Account/UserDash'
import SalesDash from '../../components/Account/SalesDash'
import ProductsDash from '../../components/Account/ProductsDash'
import BlogDash from '../../components/Account/BlogDash'

const Dashboard = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const [activeButton, setActiveButton] = useState('dashboard')
  const [, setDashboard] = useState(false)
  const [, setOrders] = useState(false)
  const [products, setProducts] = useState(false)
  const [users, setUsers] = useState(true)
  const [sales, setSales] = useState(false)
  const [blog, setBlog] = useState(false)

  const backToAccountAction = () => {
    navigate('/account')
  }

  const handleButtonClick = (buttonName) => {
    if (buttonName === 'products') {
      setDashboard(false)
      setOrders(false)
      setProducts(true)
      setUsers(false)
      setSales(false)
      setBlog(false)
      setActiveButton(buttonName)
    }
    if (buttonName === 'orders') {
      setDashboard(false)
      setOrders(true)
      setProducts(false)
      setUsers(false)
      setSales(false)
      setBlog(false)
      setActiveButton(buttonName)
    }
    if (buttonName === 'users') {
      setDashboard(false)
      setOrders(false)
      setProducts(false)
      setUsers(true)
      setSales(false)
      setBlog(false)
      setActiveButton(buttonName)
    }
    if (buttonName === 'sales') {
      setDashboard(false)
      setOrders(false)
      setProducts(false)
      setUsers(false)
      setSales(true)
      setBlog(false)
      setActiveButton(buttonName)
    }
    if (buttonName === 'blog') {
      setDashboard(false)
      setOrders(false)
      setProducts(false)
      setUsers(false)
      setSales(false)
      setBlog(true)
      setActiveButton(buttonName)
    }
  }

  if (user.rol !== 'admin') {
    navigate('/account')
  } else {
    return (
            <div>
                <div>
                    <div>
                        <div style={{ display: 'flex', minHeight: '100vh' }}>
                            <NavbarAdmin
                                activeButton={activeButton}
                                handleButtonClick={handleButtonClick}
                                user={user}
                                backToAccountAction={backToAccountAction}
                            />
                            <div className="w-9/12" style={{ flex: '1' }}>
                                {/* {dashboard && <Dashboard /> } */}
                                {products && <ProductsDash />}
                                {users && <UsersDash />}
                                {sales && <SalesDash />}
                                {blog && <BlogDash />}

                                {/* <Dashboard isAuthenticated={isAuthenticated} /> */}
                                <footer style={{ textAlign: 'center', padding: '10px' }}></footer>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    )
  }
}

export default Dashboard
