import Hello from "../pages/Hello/Hello";

export const privateRoutes = [
]

export const publicRoutes = [
    {path: '*', element: <Hello/>},
    {path: '/', element: <Hello/>}
]