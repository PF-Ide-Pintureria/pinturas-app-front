import React, { useEffect } from "react";
import style from "./Blog.module.css";
import img from "../../img/blog.jpg";
import BlogCard from "../../components/BlogCard/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import getPosts from "../../redux/actions/Blog/getPosts";

const Blog = () => {
    let loremIpsu =
        "Para conseguir un buen resultado a la hora de pintar, basta con seguir unas recomendaciones.";

    const dispatch = useDispatch();

    useEffect(() => {
        getPosts()(dispatch);
    }, [dispatch]);

    const posts = useSelector(state => state.posts)

    return (
        <div className={style.container}>
            <div className={style.background}>
                <h1 className="text-3xl font-bold flex items-center justify-center">
                    BLOG
                </h1>
                <div className="my-10 flex justify-center items-center">
                    <div className="h-full w-full grid grid-cols-3 gap-3">

                        {posts.map(post => {
                            return (
                                <BlogCard
                                    image={post.image ? post.image : { img }}
                                    title={post.title}
                                    date={(Date(post.createdAt)).slice(0, 15)}
                                    description={post.description}
                                />

                            )
                        })}
                        {/* <BlogCard
                            image={img}
                            title="Consejos para pintar"
                            date="April 03, 2022"
                            description={loremIpsu}
                        />
                        <BlogCard
                            image={img}
                            title="Consejos para pintar"
                            date="April 03, 2022"
                            description={loremIpsu}
                        />
                        <BlogCard
                            image={img}
                            title="Consejos para pintar"
                            date="April 03, 2022"
                            description={loremIpsu}
                        />
                        <BlogCard
                            image={img}
                            title="LConsejos para pintar"
                            date="April 03, 2022"
                            description={loremIpsu}
                        />
                        <BlogCard
                            image={img}
                            title="LConsejos para pintar"
                            date="April 03, 2022"
                            description={loremIpsu}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
