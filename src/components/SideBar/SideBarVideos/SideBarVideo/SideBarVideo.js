import React, { Component } from 'react';
import sideBarImg from '../../../../assets/images/most-liked-img-s1.jpg';
import { sideBarVideoType } from '../../../../shared/staticString';
import sideBarImg2 from '../../../../assets/images/most-viewd-1.jpg';
class SideBarVideo extends Component {
    render() {
        let sidebarVideo = (
            <div className="media">
                <div className="media-left">
                    <img src={sideBarImg} alt="video" />
                </div>
                <div className="media-body">
                    <h1><a href="./video-detail.html">Journey</a></h1>
                    <p>
                        <span><i className="fa fa-comment"></i> 10</span>
                        <span><i className="fa fa-eye"></i> 534</span>
                    </p>
                </div>
            </div>
        );
        if (this.props.type === sideBarVideoType.full) {
            sidebarVideo = (
                <div className="most-viewd-container">
                    <div className="most-viewd-img">
                        <img className="img-responsive" src={sideBarImg2} alt="video" />
                    </div>
                    <div className="most-viewd-text">
                        <h1><a href="./video-detail.html">Human Rights Violation</a></h1>
                        <p>
                            <span><i className="fa fa-comment"></i> 10</span>
                            <span><i className="fa fa-eye"></i> 534</span>
                        </p>
                    </div>
                </div>
            );
        }
        return sidebarVideo;
    }
}
export default SideBarVideo;