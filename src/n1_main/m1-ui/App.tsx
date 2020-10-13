import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import Header from "./component/Header/Header";
import {Main} from "./component/Main/Main";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import PasswordChange from "./component/PasswordChange/PasswordChange";

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <div className="block">
                    <Route exact path='/' render={() => <Main/>}/>
                    <Route exact path='/Login' render={() => <Login/>}/>
                    <Route exact path='/Registration' render={() => <Registration/>}/>
                    <Route exact path='/PasswordChange' render={() => <PasswordChange/>}/>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
