import React, { Component } from 'react';
import './PhoneField.css';

class PhoneField extends Component {
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
        if (val.match(/[0-9]{10}/) != null) {
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
                <label>Телефон:
                    <br />
                    <input type="text"
                           value={this.state.value}
                           name="phone"
                           required
                           onChange={this.onChange}
                           style={{borderColor:color}}
                           id="p3" />
                </label>
            </p>
        );
    }
}

export default PhoneField;