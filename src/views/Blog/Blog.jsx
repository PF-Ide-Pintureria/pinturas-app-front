import React from 'react';
import style from './Blog.module.css'
import img from '../../img/logoIde.png'
import BlogCard from '../../components/BlogCard/BlogCard';

const Blog = () => {
    
    let loremIpsu = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"

    return ( 
        <div className={style.container}>
            <div className={style.background}>
                <h1 className='text-3xl font-bold flex items-center justify-center'>Blog</h1>
                <div className=' flex flex-wrap items-center justify-center m-10'>
                    <BlogCard image={img} title="Lorem Ipsum" date="April 03, 2022" description={loremIpsu}/>
                    <BlogCard image={img} title="Lorem Ipsum" date="April 03, 2022" description={loremIpsu}/>
                    <BlogCard image={img} title="Lorem Ipsum" date="April 03, 2022" description={loremIpsu}/>
                    <BlogCard image={img} title="Lorem Ipsum" date="April 03, 2022" description={loremIpsu}/>
                    <BlogCard image={img} title="Lorem Ipsum" date="April 03, 2022" description={loremIpsu}/>
                    <BlogCard image={img} title="Lorem Ipsum" date="April 03, 2022" description={loremIpsu}/>
                </div>
            </div>
        </div>
    )
}

export default Blog;