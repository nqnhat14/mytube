import React, { Component } from 'react';
import videoImg from '../../../assets/images/latest-vid-img-1.jpg'
import playBtnImg from '../../../assets/images/play-button.svg'
import FeaturedImgBig from '../../../assets/images/main-vid-image-md-1.jpg';
import FeaturedImgSmall from '../../../assets/images/main-vid-image-md-1.jpg';
import TimeAgo from 'react-timeago' 
class FeaturedVideo extends Component {
    render() {
        return (
            <div className="vid-img-holder">
                <div className="top-shadow">
                    <span><TimeAgo date={this.props.video.UploadedDate} /> </span>
                    <span>From <a href="#"><i className="fa fa-youtube-play"></i></a> </span>
                    <span><i className="fa fa-eye"></i> {this.props.video.View}</span>
                </div>
                <a href="./video-detail.html">
                    <img className="img-responsive hidden-sm hidden-xs" src={this.props.video.BigImage} alt="video_thumb" />
                    <img className="img-responsive hidden-md hidden-lg" src={this.props.video.SmallImage} alt="video_thumb" />
                    <span className="play-icon">
                        <img className="img-responsive play-svg svg" src={playBtnImg} />
                    </span>
                </a>
                <h3 className="vid-author">
                    <span>
                        By <a href="#" title="Posts by admin" rel="author">{this.props.video.UploadedBy}</a>
                    </span>
                    <a href="./video-detail.html">{this.props.video.Title}</a>
                </h3>
                <div className="bottom-shadow"></div>
                <div className="overlay-div"></div>
            </div>
        )
    }
};
export default FeaturedVideo;