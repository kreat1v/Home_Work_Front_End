import React from 'react';

class Element extends React.Component{
    render() {
        const id= this.props.match.params.id;
        return <h2>Product №{id}</h2>;
    }
}

export default Element;