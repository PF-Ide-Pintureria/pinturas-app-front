import React from 'react';
const BlogCard = ({image, title, date, description}) => {
    
    return (
        <div className="w-80 h-96 m-1 flex flex-col items-center text-white justify-center bg-gray-700 rounded-3xl">
            <img src={image} alt="image" className='w-52'/>
            <h3 className="m-2 text-base">{title}</h3>
            <h4 className="m-2 text-base">{date}</h4>
            <h4 className="m-2 text-base">{description}</h4>
        </div>
    );
}

export default BlogCard;