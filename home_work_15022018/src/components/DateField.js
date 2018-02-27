import React, { Component } from 'react';
import './DateField.css';

class DateField extends Component {
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
        if (val.match(/^\d{2}.\d{2}.\d{4}/) != null) {
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
                <label>Дата доставки:
                    <span>*</span>
                    <br />
                    <input type="text"
                           value={this.state.value}
                           name="date"
                           required
                           onChange={this.onChange}
                           style={{borderColor:color}}
                           id="d2" />
                </label>
            </p>
        );
    }
}

export default DateField;