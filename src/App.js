import React from 'react';
import './App.css';
import Header from "./comp/Header/Header";
import Home from "./comp/Pages/Home";
import Cart from "./comp/Pages/Cart";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' component={Home} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;

