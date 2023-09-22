/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Slider from './Slider'

const Reviews = () => {
  const { isAuthenticated, user } = useAuth0()

  return (
    <div className="w-1/2 mx-auto">
      <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-400 font-light mb-6">
        <div className="w-full flex mb-4 items-center">
          <div className="overflow-hidden rounded-full w-8 h-8 bg-gray-50 border border-gray-200">
            <img
              src={
                isAuthenticated
                  ? user.picture
                  : 'https://cdn-icons-png.flaticon.com/512/1053/1053244.png'
              }
              alt=""
            />
          </div>
          <div className="flex-grow pl-2">
            <h6 className="font-bold text-sm uppercase text-gray-600">
              {isAuthenticated ? user.name : 'Guest User'}
            </h6>
          </div>
        </div>
        <div></div>
        <div className="w-full">
          <p className="text-sm leading-tight">
            <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
              "
            </span>
            --
            <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
              "
            </span>
          </p>
        </div>
      </div>
      <div>
        <Slider />
      </div>
      <footer style={{ textAlign: 'center', padding: '70px' }}></footer>
    </div>
  )
}

export default Reviews
