import React from 'react';

import NewTodo from './NewTodo';
import TodoList from './TodoList';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    text: 'First task',
                    done: false
                },
                {
                    text: 'Second task',
                    done: false
                },
                {
                    text: 'Done task',
                    done: true
                }
            ]
        };
    }

    createTask(text) {
        this.state.todos.push({
            text,
            done: false
        });

        this.setState({todos: this.state.todos});
    }

    toggleTask(todo) {
        todo.done = !todo.done;
        this.setState({todos: this.state.todos});
    }

    render() {
        return (
            <div>
                <NewTodo createTask={this.createTask.bind(this)} />
                <TodoList todos={this.state.todos} toggle={this.toggleTask.bind(this)} />
            </div>
        );
    }
}

export default TodoApp;