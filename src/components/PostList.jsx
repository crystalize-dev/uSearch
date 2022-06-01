import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "../styles/app.css"

const PostList = ({posts, title, remove, isLoading}) => {

    if (!posts.length && isLoading) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не были найдены
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: 20}}>
                {title}
            </h1>
            <hr/>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition key={post.id} timeout={500} classNames="post">
                        <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;