import React from 'react'
import CreateProviderForm from '../../components/ProviderCreateForm/ProviderCreateForm'

const CreateProvider = () => {
  return (
        <div className="border-4 border-solid border-primary m-10 rounded-2xl p-6">
        <div className="flex self-center justify-around">
            <div className="m-5 border-2 border-solid border-primary rounded-xl p-5">
                <CreateProviderForm/>
            </div>
        </div>
      </div>
  )
}

export default CreateProvider
