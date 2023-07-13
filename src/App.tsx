import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage";
import BeerPage from "./Pages/BeerPage/BeerPage";
import Aside from "./Modules/Aside/Aside";
import style from "./App.module.scss"

function App() {
    return (
        <BrowserRouter>
            <div className={style.app}>
                <Aside/>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/:beerId"} element={<BeerPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
