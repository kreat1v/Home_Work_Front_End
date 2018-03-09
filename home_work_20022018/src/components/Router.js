import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import './Router.css';

import Main from './pages/Main';
import Products from './pages/Products';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

class Router extends React.Component{
    render() {
        return <BrowserRouter>
            <div>
                <ul className="Router-menu">
                    <li><Link exact to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/product">About products</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/products" component={Products} />
                    <Route path="/product" component={Product} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>;
    }
}

export default Router;