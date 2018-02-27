import React, { Component } from 'react';
import './NameField.css';

class NameField extends Component {
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
        let arr = val.split(' ').filter(function(str) {
            return str.length > 2;
        });
        return arr.length > 2;
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
                <label>ФИО:
                    <span>*</span>
                    <br />
                    <input type="text"
                           value={this.state.value}
                           name="FIO"
                           required
                           onChange={this.onChange}
                           style={{borderColor:color}}
                           id="f1" />
                </label>
            </p>
        );
    }
}

export default NameField;