import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

const App = () => {
    return (
        <div className="App">
            <Provider>
                <HashRouter>
                    <>
                        <Main />
                    </>

                </HashRouter>
            </Provider>
        </div>
    );
}

export default App;
