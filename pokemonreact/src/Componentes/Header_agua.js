import React from 'react';
import {  BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Header = () => {
    
    return (
        <nav>
            <div className="nav-wrapper  blue darken-1" >
                <a href="/" className="brand-logo center" align='center'>Loja água</a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/loja_agua">Água</a></li>
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
        </nav>

        
       
    );
}
export default Header;
