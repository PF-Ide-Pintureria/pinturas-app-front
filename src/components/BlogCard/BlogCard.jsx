import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import getUserById from '../../redux/actions/User/getUserById';


const BlogCard = ({ id, image, title, date, description, author }) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.userId);
    useEffect(() => {
        getUserById(author)(dispatch)
    }, [dispatch])
    const creator = (user.name + " " + user.lastName)

    return (
        <NavLink to={`/blog/${id}`}>
            <div className="w-80 h-96 m-1 flex flex-col items-center text-white justify-center bg-gray-700 rounded-3xl">
                <img src={image} alt="image" className='w-52' />
                <h3 className="m-2 text-base">{title}</h3>
                <h4 className="m-2 text-base">{date}</h4>
                <h4 className="m-2 text-base">{description}</h4>
                <h6 className="flex justify-end m-2 text-xs">Creado por: {creator}</h6>
            </div>
        </NavLink>
    );
}

export default BlogCard;