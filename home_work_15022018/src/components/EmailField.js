import React, { Component } from 'react';
import './EmailField.css';

class EmailField extends Component {
    constructor(props) {
        super(props);
        let val = (props.value) ? props.value : '';
        this.state = {
            value: val,
            valid: this.validate(val)
        };
        this.onChange = this.onChange.bind(this);
    }

    validate(val) {
        if (val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) != null) {
            return true;
        } else {
            return false;
        }
    }

    onChange(event) {
        let val = event.target.value;
        let isValid = this.validate(val);
        this.setState({
            value: val,
            valid: isValid
        });
    }

    render() {
        let color = this.state.valid === true ? "green" : "red";

        return (
            <p>
                <label>Email:
                    <span>*</span>
                    <br />
                    <input type="text"
                           value={this.state.value}
                           name="e-mail"
                           required
                           onChange={this.onChange}
                           style={{borderColor:color}}
                           id="e2" />
                </label>
            </p>
        );
    }
}

export default EmailField;