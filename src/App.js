import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/layout/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return ( <
            div className = "App" >
                <div className="header">
                    <div className="title">Pokemon</div>
                    <p>Here is a list of 60 pokemon-species:</p>
                </div>
                <div className="container">
                    <Dashboard/>
                </div>



            </div>
        );
    }
}

export default App;
