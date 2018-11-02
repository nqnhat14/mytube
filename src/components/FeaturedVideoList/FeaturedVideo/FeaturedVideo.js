import React, { Component } from 'react';
import playBtnImg from '../../../assets/images/play-button.svg'
import {Link} from 'react-router-dom';
import TimeAgo from 'react-timeago';
import WOW from "wowjs";
class FeaturedVideo extends Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div className={["vid-img-holder wow",this.props.video.Large?"pulse":"fadeInUp"].join(" ")} data-wow-duration={this.props.video.Large?"1s":"0.5s"}>
                <div className="top-shadow">
                    <span><TimeAgo date={this.props.video.UploadedDate} /> </span>
                    <span>From <a href="#"><i className="fa fa-youtube-play"></i></a> </span>
                    <span><i className="fa fa-eye"></i> {this.props.video.View}</span>
                </div>
                <Link to={"./video-details/"+this.props.video._id}>
                    <img className="img-responsive hidden-sm hidden-xs" src={this.props.video.BigImage} alt="video_thumb" />
                    <img className="img-responsive hidden-md hidden-lg" src={this.props.video.SmallImage} alt="video_thumb" />
                    <span className="play-icon">
                        <img className="img-responsive play-svg svg" src={playBtnImg} />
                    </span>
                </Link>
                <h3 className="vid-author">
                    <span>
                        By <a href="#" title="Posts by admin" rel="author">{this.props.video.UploadedBy}</a>
                    </span>
                    <Link to={"./video-details/"+this.props.video._id}>{this.props.video.Title}</Link>
                </h3>
                <div className="bottom-shadow"></div>
                <div className="overlay-div"></div>
            </div>
        )
    }
};
export default FeaturedVideo;