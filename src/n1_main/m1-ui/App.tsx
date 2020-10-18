import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
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
                <Switch>
                    <Route exact path='/' render={() => <Profile/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/registration' render={() => <Registration/>}/>
                    <Route path='/passwordChange' render={() => <PasswordChange/>}/>
                    <Route path='/forgotPassword' render={() => <ForgotPassword/>}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
