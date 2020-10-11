import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Main} from "./component/Main";
import Header from "./component/Header";

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <>
                    <Header/>
                    <Main/>
                </>
            </HashRouter>
        </div>
    );
}

export default App;
