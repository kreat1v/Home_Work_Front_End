import React, { Component } from 'react';

import Users from './components/Users/Users';
import TodoApp from './components/Todo/TodoApp';

class App extends Component {
    render() {
        return (
            <div>
                <Users />
                <TodoApp />
            </div>
        );
    }
}

export default App;