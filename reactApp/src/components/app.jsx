import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from '../constants/routeConstants';
import SubscribePage from './Subscribe/SubscribePage';

class App extends React.Component {
    render() {
        return (
            <Router className="container-fluid">
                <Switch>                    
                    <Route path={Routes.HOME} component={SubscribePage} />
                </Switch>
            </Router>
        );
    }
}

App.propTypes = {
};

export default connect()(App);
