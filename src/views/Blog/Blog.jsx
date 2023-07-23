import React from 'react';
import style from './Blog.module.css'
import img from '../../img/logoIde.png'
import BlogCard from '../../components/BlogCard/BlogCard';

const Blog = () => {
    
    let loremIpsu = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"

    return ( 
        <div className={style.container}>
            <div className={style.background}>
                <h1 className='text-3xl font-bold flex items-center justify-center'>BLOG</h1>
                <div className="my-10 flex justify-center items-center">
                    <div className="h-full w-full grid grid-cols-3 gap-3">
                        <BlogCard image={img} title="Lorem Ipsum" date="April 03, 2022" description={loremIpsu}/>
                        <BlogCard image={img} title="Lorem Ipsum" date="April 03, 2022" description={loremIpsu}/>
                        <BlogCard image={img} title="Lorem Ipsum" date="April 03, 2022" description={loremIpsu}/>
                        <BlogCard image={img} title="Lorem Ipsum" date="April 03, 2022" description={loremIpsu}/>
                        <BlogCard image={img} title="Lorem Ipsum" date="April 03, 2022" description={loremIpsu}/>
                        <BlogCard image={img} title="Lorem Ipsum" date="April 03, 2022" description={loremIpsu}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;