import React, { Component } from 'react';
import './QuantityField.css';

class QuantityField extends Component {
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
        if (val.match(/[1-9]/) != null) {
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
                <label>Количество:
                    <span>*</span>
                    <br />
                    <input type="text"
                           value={this.state.value}
                           name="quantity"
                           required
                           onChange={this.onChange}
                           style={{borderColor:color}}
                           id="k2" />
                </label>
            </p>
        );
    }
}

export default QuantityField;