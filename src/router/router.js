import About from "../pages/About";
import Login from "../pages/Login";
import Hello from "../pages/Hello";

export const privateRoutes = [
]

export const publicRoutes = [
    {path: '*', element: <Hello/>},
    {path: '/', element: <Hello/>},
    {path: '/login', element: <Login/>},
    {path: '/about', element: <About/>}
]