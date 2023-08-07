import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPostById from "../../redux/actions/Blog/getPostById";
import { useParams } from "react-router-dom";
import BlogBackground from "../../img/gradientBackground.png";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const { idBlog } = useParams();

  useEffect(() => {
    getPostById(idBlog)(dispatch);
  }, [dispatch]);

  return (
    <div className="bg-primary min-h-screen">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${BlogBackground})` }}
      >
        <div className="container mx-auto py-10 text-white">
          <h1 className="text-4xl font-bold text-center my-6">{post.title}</h1>
          <div className="flex justify-center">
            <img
              src={post.image ? post.image : BlogBackground}
              alt="Blog"
              className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] h-auto object-cover rounded-md"
            />
          </div>
          <div className="my-6">{post.description}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
