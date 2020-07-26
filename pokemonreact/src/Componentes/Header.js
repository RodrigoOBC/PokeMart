import React from 'react';
import {  BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../Paginas/App';
import agua from '../Paginas/Loja_agua'

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper  blue darken-1" >
                <Link to="/home" className="brand-logo center" align='center'>Loja Pokemon</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/agua">Água</Link></li>
                    <li><Link to="/home">Home</Link></li>
                </ul>
            </div>
        </nav>

        <Router>
            <App>
                <Switch>
                    <Route  path="/home" component={Home}/>
                    <Route  path="/agua" component={agua} />
                </Switch>
            </App>
        </Router>
       
    );
}
export default Header;
