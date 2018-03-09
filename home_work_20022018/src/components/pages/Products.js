import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductsList from './ProductsList';
import Element from './Element';

class Products extends React.Component{
    render() {
        return <div>
            <Switch>
                <Route exact path="/products" component={ProductsList} />
                <Route path="/products/:id" component={Element} />
            </Switch>
        </div>
    }
}

export default Products;