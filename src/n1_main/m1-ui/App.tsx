import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import Header from "./component/Header/Header";
import {Profile} from "./component/Profile/Profile";
import Registration from "./component/Registration/Registration";
import PasswordChange from "./component/PasswordChange/PasswordChange";
import ForgotPassword from "./component/ForgotPassword/ForgotPassword";
import Login from "./component/Login/Login";

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <div className="block">
                    <Route exact path='/' render={() => <Profile/>}/>
                    <Route exact path='/login' render={() => <Login/>}/>
                    <Route exact path='/registration' render={() => <Registration/>}/>
                    <Route exact path='/passwordChange' render={() => <PasswordChange/>}/>
                    <Route exact path='/forgotPassword' render={() => <ForgotPassword/>}/>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
