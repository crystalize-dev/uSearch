import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        <Routes>
            {isAuth
                ? privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>)
                : publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>)
            }

            <Route path="*" element={//<Posts/>
                <main style={{padding: "1rem", color: 'red'}}>
                    <h1>Ну и куда ты блять залез полупокер ебаный??!?!?!</h1>
                </main>
            }
            />
        </Routes>
    );
};

export default AppRouter;