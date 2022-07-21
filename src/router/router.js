import Hello from "../pages/Hello/Hello";
import LoginModal from "../pages/Hello/LoginModal/LoginModal";
import MainPage from "../pages/Main Page/MainPage";

export const privateRoutes = [
    {path: '*', element: <MainPage/>}
]

export const publicRoutes = [
    {path: '*', element: <Hello/>},
    {path: '/', element: <Hello/>},
    {path: '/login', element: <LoginModal/> }
]