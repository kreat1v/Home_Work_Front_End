import React from 'react';
import { Link } from 'react-router-dom';

class UsersList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                this.setState({users: json});
            })
    };

    render() {
        return <ul>
            {
                this.state.users.map(function(item) {
                    return <li key={item.id}>
                        <Link to={`/users/${item.id}`}>{item.name}</Link>
                    </li>
                })
            }
        </ul>
    }
}

export default UsersList;