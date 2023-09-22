import React from 'react'
import CreateForm from '../../../components/CreateForm/CreateForm'
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin'

const AdminProducts = () => {
  return (
    <div>
      <div className="background">
        <NavbarAdmin />
        <div className="flex self-center justify-around">
          <div className="form">
            <CreateForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProducts
