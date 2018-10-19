import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import {withRouter} from 'react-router-dom';
import Home from './containers/Home/Home';



class App extends Component {
    render() {
        return (
            <div id="wrapper">
                <Layout>
                    <Home></Home>
                </Layout>
            </div>
        );
    }
}
export default withRouter(App);
