import React, { Component } from 'react';

class RelatedVideos extends Component {
    render() {
        return (
            <div className="related-item">
                <div className="vid-heading overflow-hidden">
                    <span className="wow fadeInUp" data-wow-duration="0.8s">
                        Related Videos
										            </span>
                    <div className="hding-bottm-line wow zoomIn" data-wow-duration="0.8s">
                    </div>
                </div>
                <div className="row">
                    <div className="vid-container">
                        <div className="col-md-4 col-sm-6">
                            <div className="latest-vid-img-container">
                                <div className="vid-img">
                                    <img className="img-responsive" src="./images/2-column-vid-img_2.jpg" alt="video image" />
                                    <a href="video-detail.html" className="play-icon play-small-icon">
                                        <img className="img-responsive play-svg svg" src="./images/play-button.svg" alt="play"  />
                                    </a>
                                    <div className="overlay-div"></div>
                                </div>
                                <div className="vid-text">
                                    <p><span>By</span> <a href="#">Jhon Doe</a></p>
                                    <h1><a href="video-detail.html">Sun Skating</a></h1>
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
                        <div className="col-md-4 col-sm-6">
                            <div className="latest-vid-img-container">
                                <div className="vid-img">
                                    <img className="img-responsive" src="./images/2-column-vid-img_3.jpg" alt="video image" />
                                    <a href="video-detail.html" className="play-icon play-small-icon">
                                        <img className="img-responsive play-svg svg" src="./images/play-button.svg" alt="play"  />
                                    </a>
                                    <div className="overlay-div"></div>
                                </div>
                                <div className="vid-text">
                                    <p><span>By</span> <a href="#">Jhon Doe</a></p>
                                    <h1><a href="video-detail.html">Tennis Night</a></h1>
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
                        <div className="col-md-4 col-sm-6">
                            <div className="latest-vid-img-container">
                                <div className="vid-img">
                                    <img className="img-responsive" src="./images/2-column-vid-img_4.jpg" alt="video image" />
                                    <a href="video-detail.html" className="play-icon play-small-icon">
                                        <img className="img-responsive play-svg svg" src="./images/play-button.svg" alt="play"  />
                                    </a>
                                    <div className="overlay-div"></div>
                                </div>
                                <div className="vid-text">
                                    <p><span>By</span> <a href="#">Jhon Doe</a></p>
                                    <h1><a href="video-detail.html">Wrestle Mania viii</a></h1>
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
                    </div>
                </div>
            </div>
        );
    }
}
export default RelatedVideos;