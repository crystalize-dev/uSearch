import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '*', element: <Posts/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '/about', element: <About/>}
]

export const publicRoutes = [
    {path: '*', element: <Login/>},
    {path: '/login', element: <Login/>}
]