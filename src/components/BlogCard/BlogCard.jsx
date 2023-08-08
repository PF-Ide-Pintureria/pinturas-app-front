import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import getUserById from "../../redux/actions/User/getUserById";

const BlogCard = ({ id, image, title, date, description, author }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userId);
  useEffect(() => {
    getUserById(author)(dispatch);
  }, [dispatch]);
  const creator = user.name + " " + user.lastName;

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
          <h6 className="mt-2 mb-1 text-xs  text-gray-200">
            Creado por: {creator}
          </h6>
        </div>
      </div>
    </NavLink>
  );
};

export default BlogCard;
