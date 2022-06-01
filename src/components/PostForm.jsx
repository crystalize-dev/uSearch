import React, {useState} from 'react';
import MyInput from "./UI/Inputs/MyInput";
import MyButton from "./UI/Buttons/MyButton";
import "../styles/app.css"

const PostForm = ({create, totalPage, setTotalPages}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();
         const newPost = {
             ...post, id:(totalPage + 1)
         }

         setTotalPages(totalPage + 1)

        create(newPost)

        setPost({title: '', body: ''});
    }

    return (
        <form>
            <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text"
                     placeholder='Название поста'/>
            <MyInput value={post.body} onChange={e => setPost({...post, body: e.target.value})} type="text"
                     placeholder='Описание поста'/>
            <hr/>
            <div className="submit_area">
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </div>
        </form>
    );
};

export default PostForm;