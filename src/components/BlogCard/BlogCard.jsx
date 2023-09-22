import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogCard = ({ id, image, title, date, description }) => {
  return (
        <NavLink to={`/blog/${id}`}>
            <div
                className="w-80 h-96 m-4 flex flex-col items-center
       text-white bg-gray-500 rounded-3xl overflow-hidden
       transition-transform transform hover:scale-105"
            >
                <div className="w-full h-48">
                    <img
                        src={image}
                        alt="Blog"
                        className="w-full h-full object-cover rounded-t-3xl"
                    />
                </div>
                <div className="flex flex-col justify-between items-center p-3 h-full">
                    <div className="flex flex-col items-center">
                        <h3 className="text-base font-semibold text-quaternary text-center md:text-lg lg:text-xl">
                            {title}
                        </h3>
                        <h4 className="mt-1 text-xs text-center">{date}</h4>
                        <p className="mt-2 text-sm italic text-center overflow-ellipsis overflow-hidden h-16">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </NavLink>
  )
}

export default BlogCard
