import React, { useEffect } from 'react'
import BlogBackground from '../../img/gradientBackground.png'
import img from '../../img/blog.jpg'
import BlogCard from '../../components/BlogCard/BlogCard'
import { useDispatch, useSelector } from 'react-redux'
import getPosts from '../../redux/actions/Blog/getPosts'

const Blog = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getPosts()(dispatch)
  }, [dispatch])

  const posts = useSelector((state) => state.posts)

  return (
        <div
            className="bg-cover bg-center min-h-screen flex justify-center items-center"
            style={{ backgroundImage: `url(${BlogBackground})` }}
        >
            <div className="pb-30 ">
                <div className="py-20">
                    <h1 className="text-5xl font-bold text-primary mb-5 text-center pb-4">
                        BLOG
                    </h1>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
                            {posts.map((post) => {
                              if (post.active) {
                                return (

                                        <BlogCard
                                            key={post.idBlog}
                                            id={post.idBlog}
                                            image={post.image ? post.image : img}
                                            title={post.title}
                                            date={Date(post.createdAt).slice(0, 15)}
                                            description={post.description}
                                            author={post.userId}
                                        />
                                )
                              }
                              return null
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Blog
