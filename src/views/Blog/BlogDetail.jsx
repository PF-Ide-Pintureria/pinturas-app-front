import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPostById from "../../redux/actions/Blog/getPostById";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.post);
    const { idBlog } = useParams()
    useEffect(() => {
        getPostById(idBlog)(dispatch);
    }, [dispatch]);


    return (
        <div>

        </div>
    )
};

export default BlogDetail;