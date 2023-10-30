import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NavbarAdmin from '@components/NavbarAdmin/NavbarAdmin'
import UsersDash from '@components/Account/UsersDash'
import SalesDash from '@components/Account/SalesDash'
import ProductsDash from '@components/Account/ProductsDash'
import BlogDash from '@components/Account/BlogDash'
import ProvidersDash from '@components/Account/ProvidersDash'
import Account from '../Account/Account'

const Dashboard = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const [activeButton, setActiveButton] = useState('dashboard')
  const [, setDashboard] = useState(false)
  const [, setOrders] = useState(false)
  const [products, setProducts] = useState(false)
  const [users, setUsers] = useState(false)
  const [sales, setSales] = useState(false)
  const [blog, setBlog] = useState(false)
  const [providers, setProviders] = useState(true)

  const backToAccountAction = () => {
    navigate('/account')
  }

  const handleButtonClick = (buttonName) => {
    setDashboard(false)
    setOrders(false)
    setProducts(false)
    setUsers(false)
    setSales(false)
    setBlog(false)
    setProviders(false)
    setActiveButton(buttonName)

    switch (buttonName) {
      case 'products':
        setProducts(true)
        break
      case 'orders':
        setOrders(true)
        break
      case 'users':
        setUsers(true)
        break
      case 'sales':
        setSales(true)
        break
      case 'blog':
        setBlog(true)
        break
      case 'providers':
        setProviders(true)
        break
      default:
        // Cualquier otro caso que quieras manejar
        break
    }
  }

  if (user.rol !== 'admin') {
    return <Account/>
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
                                {providers && <ProvidersDash />}

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
