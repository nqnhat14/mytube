import React, { Component } from 'react';
import VideoList from '../../components/VideoList/VideoList';
import SideBar from '../../components/SideBar/SideBar';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import FeaturedVideoList from '../../components/FeaturedVideoList/FeaturedVideoList';
class Home extends Component {
    render() {
        return (
            <Auxiliary>
                <div id="main-section">
                    <div class="container">
                        <FeaturedVideoList/>
                    </div>
                </div>
                <div id="secondary-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-sm-8">
                                <VideoList title="Latest Albums"></VideoList>
                                <VideoList title="Most Viewed Albums"></VideoList>
                                <VideoList title="Sports Albums"></VideoList>
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
export default Home;