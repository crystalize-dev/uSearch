import React, {useEffect, useRef, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import getPagesCount from "../utils/pages";
import MyButton from "../components/UI/Buttons/MyButton";
import MyModal from "../components/UI/Modal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import MyLoader from "../components/UI/Loader/MyLoader";
import {useObserver} from "../hooks/useObserver";
import "../styles/app.css"

function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState()
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()

    const [fetchPosts, isLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton className="createPost_btn" onClick={() => setModal(true)}> Создать пост </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} totalPage={totalPages} setTotalPages={setTotalPages}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
                limit={limit}
                setLimit={setLimit}
            />
            {postError &&
                <h1>Произошла ошибка: {postError}</h1>
            }

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Post List'}/>

            {isLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><MyLoader/></div>
            }
            <div ref={lastElement} style={{height: 20}}/>
        </div>
    );
}

export default Posts;
