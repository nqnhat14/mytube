import React, { Component } from 'react';
import VideoList from '../../components/VideoList/VideoList';
import SideBar from '../../components/SideBar/SideBar';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import FeaturedVideoList from '../../components/FeaturedVideoList/FeaturedVideoList';
import * as actions from '../../store/actions/index';
import { albumType } from '../../shared/staticString';
import { connect } from 'react-redux';
class Home extends Component {
    componentDidMount() {
        // Object.keys(albumType).map(type => {
        //     this.props.getAlbum(type);
        // })
        for(let type of Object.keys(albumType)){
            this.props.getAlbum(type);
        }
    }
    render() {
        return (
            <Auxiliary>
                <div id="main-section">
                    <div className="container">
                        <FeaturedVideoList videos={this.props.albums[albumType.featured]}/>
                    </div>
                </div>
                <div id="secondary-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-sm-8">
                                <VideoList title="Latest Albums" videos={this.props.albums[albumType.lasted]}></VideoList>
                                <VideoList title="Most Viewed Albums" videos={this.props.albums[albumType.mostViewed]}></VideoList>
                                <VideoList title="Sports Albums" videos={this.props.albums[albumType.sport]}></VideoList>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <SideBar></SideBar>
                            </div>
                        </div>
                    </div>
                </div>
            </Auxiliary>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        albums: state.album.filteredAlbums
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAlbum: (type) => dispatch(actions.fetchAlbum(type))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);