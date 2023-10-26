import React from 'react'
import ProviderEditForm from '@components/ProviderEditForm/ProviderEditForm'

const EditProvider = () => {
  return (
        <div className="border-4 border-solid border-primary m-10 rounded-2xl p-6">
        <div className="flex self-center justify-around">
            <div className="m-5 border-2 border-solid border-primary rounded-xl p-5">
                <ProviderEditForm/>
            </div>
        </div>
      </div>
  )
}

export default EditProvider
