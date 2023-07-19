import React from 'react';
const BlogCard = ({image, title, date, description}) => {
    
    return (
        <div className="w-96 h-96 m-2 flex flex-col items-center text-white justify-center bg-gray-700 rounded-3xl ">
            <img src={image} alt="image" className='w-52'/>
            <h3>{title}</h3>
            <h4>{date}</h4>
            <h4>{description}</h4>
        </div>
    );
}

export default BlogCard;