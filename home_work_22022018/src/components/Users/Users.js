import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UsersList from './UsersList';
import User from './User';

class Users extends React.Component{
    render() {
        return <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/users" component={UsersList} />
                    <Route path="/users/:id" component={User} />
                </Switch>
            </div>
        </BrowserRouter>;
    }
}

export default Users;