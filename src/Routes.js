import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

import Board from './components/board/Board';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/chat" component={Board} />
            </Switch>
        </Router>
    )
}

export default Routes;

