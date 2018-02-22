import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.check};
        this.style = {padding: '10px'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({value: !this.state.value})
    }

    render() {
        return (
            <div>
                <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
                <label style={this.style}>{this.state.value ? 'True' : 'False'}</label>
            </div>
        );
    }
}

export default Input;