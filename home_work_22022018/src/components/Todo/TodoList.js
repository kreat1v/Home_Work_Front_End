import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        let items = [];
        let todos = this.props.todos;

        for (let index in todos) {
            items.push(
                <Todo todo={todos[index]} key={index} toggle={this.props.toggle}/>
            );
        }

        return (
            <ul>
                {items}
            </ul>
        );
    }
}

export default TodoList;