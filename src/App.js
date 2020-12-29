import React from 'react';
import './App.css';
import Header from "./comp/Header/Header";
import Home from "./comp/Pages/Home";
import Cart from "./comp/Pages/Cart";
import {Route} from "react-router-dom";
import axios from "axios";


function App() {
    const [pizzzas, serPizzzas] = React.useState([]);
    /*    React.useEffect(() => {
            fetch('http://localhost:3000/db.json')
                .then((resp) => resp.json())
                .then(json => {
                    serPizzzas(json.pizzas);
                });
        }, []); */
    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            serPizzzas(data.pizzas);
        });
    }, []);
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' render={() => <Home items={pizzzas}/>} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;

