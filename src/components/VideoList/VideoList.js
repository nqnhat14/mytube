import React, { Component } from 'react';
import Video from './Video/Video';

class VideoList extends Component {

    render() {
        let videos = [];
        for(let i =0;i<10;i++){
            videos.push(<Video key={i}></Video>)
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-sm-8">
                        <div className="latst-vid secondary-vid">
                            <div className="vid-heading overflow-hidden">
                                <span>{this.props.title}</span>
                                <div className="hding-bottm-line"></div>
                            </div>
                            <div className="row auto-clear">
                                <div className="vid-container">
                                    {videos}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default VideoList;