import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import Header from "./component/Header";
import {SecondPage} from "./component/SecondPage";
import {Main} from "./component/Main";

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <div className="block">
                    <Route exact path='/' render={() => <Main/>}/>
                    <Route exact path='/Second' render={() => <SecondPage/>}/>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
