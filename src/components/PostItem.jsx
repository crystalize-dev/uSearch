import React from 'react';
import MyButton from "./UI/Buttons/MyButton";
import '../styles/app.css';
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    let navigate = useNavigate();

    return (
        <div className="post">
            <div className="post_content">
                <strong> {props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post_btn">
                <MyButton onClick={e => navigate(`/posts/${props.post.id}`)}>Открыть</MyButton>
                <div className="btn_correct">
                    <MyButton onClick={e => props.remove(props.post)}>Удалить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;