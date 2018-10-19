import React, { Component } from 'react';
import videoImg from '../../../assets/images/latest-vid-img-1.jpg'
import playBtnImg from '../../../assets/images/play-button.svg'

class Video extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-6">
                <div className="latest-vid-img-container">
                    <div className="vid-img">
                        <img className="img-responsive" src={videoImg} alt="video image" />
                        <a href="./video-detail.html" className="play-icon play-small-icon">
                            <img className="img-responsive play-svg svg" src={playBtnImg} alt="play" />
                        </a>
                        <div className="overlay-div"></div>
                    </div>
                    <div className="vid-text">
                        <p><span>By</span> <a href="#">Jhon Doe</a></p>
                        <h1><a href="./video-detail.html">Super Hero of Kids</a></h1>
                        <p className="vid-info-text">
                            <span>4 month ago</span>
                            <span>&#47;</span>
                            <span>
                                From <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </span>
                            <span>&#47;</span>
                            <span>410 views</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};
export default Video;