import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import Watch from './containers/Watch/watch';



class App extends Component {
    render() {
        return (
            <div id="wrapper">
                <Layout>
                    <Switch>
                        <Route path="/video-details/:id" component={Watch} />
                        <Route path="/" component={Home} />
                        <Redirect to="/" />
                    </Switch>
                </Layout>
            </div>
        );
    }
}
export default withRouter(App);
