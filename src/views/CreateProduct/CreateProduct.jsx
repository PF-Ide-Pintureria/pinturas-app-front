import React from 'react'
import CreateForm from '../../components/CreateForm/CreateForm'

const CreateProduct = () => {
  return (
        <div className="border-4 border-solid border-primary m-10 rounded-2xl p-6">
            <div className="flex self-center justify-around">
                <div className="m-5 border-2 border-solid border-primary rounded-xl p-5">
                    <CreateForm/>
                </div>
            </div>
        </div>
  )
}

export default CreateProduct
