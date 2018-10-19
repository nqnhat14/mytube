import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Topbar from '../../components/Topbar/Topbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    };
    render() {
        return (
            <Auxiliary>
                <div id="main-content">
                    <Topbar></Topbar>
                    <Header></Header>
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                    <Footer></Footer>
                </div>

            </Auxiliary>
        );
    };
};

export default Layout;