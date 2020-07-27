import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './Paginas/main/index'
import Agua from './Paginas/Agua/index'


function Routes(){
    return (
        
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/loja_agua' exact component={Agua} />
        </Switch>
        </BrowserRouter>

    );
}

export default Routes;