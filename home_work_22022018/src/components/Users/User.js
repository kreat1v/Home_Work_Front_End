import React from 'react';

class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            user: []
        }
    }

    componentWillMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then((response) => response.json())
            .then((json) => {
                this.setState({user: json});
            })
    };

    render() {
        return <div>
           <p>Name: {this.state.user.name}</p>
           <p>Username: {this.state.user.username}</p>
           <p>Email: {this.state.user.email}</p>
           <p>Phone: {this.state.user.phone}</p>
           <p>Website: {this.state.user.website}</p>
        </div>;
    }
}

export default User;