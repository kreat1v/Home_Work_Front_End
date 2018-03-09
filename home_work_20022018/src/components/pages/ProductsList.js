import React from 'react';
import { Link } from 'react-router-dom';

class ProductsList extends React.Component{
    render() {
        let productsArray = [
            {id:1, name: 'Phone'},
            {id:2, name: 'TV'},
            {id:3, name: 'Tablet'},
            {id:4, name: 'Headphones'},
            {id:5, name: 'Laptop'},
        ];

        return <ul>
            {
                productsArray.map(function(item) {
                    return <li key={item.id}>
                        <Link exact to={`/products/${item.id}`}>{item.name}</Link>
                    </li>
                })
            }
        </ul>;
    }
}

export default ProductsList;