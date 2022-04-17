import React from 'react';
import Home from './pages/home';
import Error from './pages/error';
import Filme from './pages/filme'
import Header from './components/header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme} />
                <Route path="*" component={Error}  />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;