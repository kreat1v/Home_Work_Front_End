import React, { Component } from 'react';

import NameField from './NameField';
import EmailField from './EmailField';
import PhoneField from './PhoneField';
import QuantityField from './QuantityField';
import DateField from './DateField';

import './UserForm.css';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let name = this.refs.nameField.state.value;
        let email = this.refs.emailField.state.value;
        let phone = this.refs.emailField.state.value;
        let quantity = this.refs.emailField.state.value;
        let date = this.refs.dateField.state.value;
        if (this.refs.nameField.state.valid &&
            this.refs.emailField.state.valid &&
            this.refs.phoneField.state.valid &&
            this.refs.quantityField.state.valid &&
            this.refs.dateField.state.valid) {
            console.log("Имя: " + name + " Email: " + email + " Phone: " + phone + " Quantity: " + quantity + " Date: " + date);
        }
    }

    render() {
        return (
            <form id="form_1"
                  method="post"
                  action="*"
                  name="form_submit"
                  onSubmit={this.handleSubmit}>

                <h2 className="h">Форма оформления заказа</h2>
                <p className="pad">
                    <NameField ref="nameField" />
                </p>
                <p className="pad">
                    <EmailField ref="emailField" />
                </p>
                <p className="pad">
                    <PhoneField ref="phoneField" />
                </p>
                <p className="pad">
                    <QuantityField ref="quantityField" />
                </p>
                <p className="pad">
                    <DateField ref="dateField" />
                </p>

                <div className="sub">
                    <div className="footer">
                        <input type="submit"
                               name="button1"
                               id="submit"
                               value="Отправить" />
                        <input type="reset"
                               name="button2"
                               id="reset"
                               value="Очистить" />
                    </div>
                </div>
            </form>
        );
    }
}

export default UserForm;