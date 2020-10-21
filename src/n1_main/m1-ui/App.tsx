import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Header from "./component/Header/Header";
import {Profile} from "./component/Profile/Profile";
import AuthPage from "./pages/AuthPage";


const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' render={() => <Profile/>}/>
                    <Route path='/authPage' render={() => <AuthPage/>}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
