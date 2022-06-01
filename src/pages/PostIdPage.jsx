import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/Loader/MyLoader";
import "../styles/app.css";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])


    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    })


    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, [])

    return (
        <div className="textBox">
            <h1>Post №{params.id}</h1>
            {isLoading
                ? <MyLoader/>
                : <div style={{marginTop: 20}}>{post.title}</div>
            }
            <h1 style={{marginTop: 50}}>
                Comments
            </h1>
            {isComLoading
                ? <MyLoader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;