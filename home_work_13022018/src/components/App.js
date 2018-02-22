import React, { Component } from 'react';
import Input from './Input';

class App extends Component {
    render() {
        const check = false;

        return (
            <div>
                <Input check={check} />
            </div>
        );
    }
}

export default App;