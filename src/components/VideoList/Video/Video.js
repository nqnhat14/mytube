import React, { Component } from 'react';
import videoImg from '../../../assets/images/latest-vid-img-1.jpg'
import playBtnImg from '../../../assets/images/play-button.svg'
import TimeAgo from 'react-timeago'
import {Link} from 'react-router-dom'
class Video extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-6">
                <div className="latest-vid-img-container">
                    <div className="vid-img">
                        <img className="img-responsive" src={this.props.video.Image} alt="video image" />
                        <Link to={"/video-details/"+this.props.video._id} className="play-icon play-small-icon">
                            <img className="img-responsive play-svg svg" src={playBtnImg} alt="play" />
                        </Link>
                        <div className="overlay-div"></div>
                    </div>
                    <div className="vid-text">
                        <p><span>By</span> <a href="#">{this.props.video.UploadedBy}</a></p>
                        <h1><Link to={"/video-details/"+this.props.video._id}>{this.props.video.Title}</Link></h1>
                        <p className="vid-info-text">
                            <span><TimeAgo date={this.props.video.UploadedDate} /></span>
                            <span>&#47;</span>
                            <span>
                                From <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </span>
                            <span>&#47;</span>
                            <span>{this.props.video.View} views</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};
export default Video;