import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Topbar from '../../components/Topbar/Topbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
class Layout extends Component {
    state = {
        searchText:""
    }
    searchInputChangedHandler = (event)=>{
        //this.setState({searchText:event.target.value});
        this.props.onSearch(event.target.value);
    }
    searchHandler = ()=>{
        this.props.onSearch(this.state.searchText);
    }
    render() {
        return (
            <Auxiliary>
                <div id="main-content">
                    <Topbar changed={(event) => this.searchInputChangedHandler(event)} searched={this.searchHandler}></Topbar>
                    <Header></Header>
                    {this.props.children}
                    <Footer></Footer>
                </div>

            </Auxiliary>
        );
    };
};
const mapDispatchToProps = (dispatch)=>{
    return{
        onSearch:(searchText)=>dispatch(actions.search(searchText))
    }
}
export default connect(null,mapDispatchToProps)(Layout);