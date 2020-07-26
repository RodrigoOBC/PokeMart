import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Paginas/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Home from './Paginas/App';
import agua from './Paginas/Loja_agua'


ReactDOM.render(
    (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/agua" component={agua}/>
                </Switch>
            </App>
        </Router>
    ),
    document.getElementById('root')
);