import React from 'react';

class NewTodo extends React.Component {
    create(event) {
        event.preventDefault();
        let text = this.refs.newTodoText.value;
        if (text) {
            this.props.createTask(text);
            this.refs.newTodoText.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.create.bind(this)}>
                <label>New task: </label>
                <input type="text" ref="newTodoText"/>
                <button type="submit">+</button>
            </form>
        );
    }
}

export default NewTodo;