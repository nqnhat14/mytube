import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import SideBar from '../../components/SideBar/SideBar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CommentForm from '../../components/CommentForm/CommentForm';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Moment from 'react-moment';
class Watch extends Component {
    componentDidMount() {
        // console.log(this.props.match.params.id);
        this.props.onFetchVideo(this.props.match.params.id);
    }
    render() {
        let video = <Spinner />;
        if (this.props.video) {
            video = (
                <div id="video-detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-sm-8">
                                <div className="vid-detail-container">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="vid-player">
                                                <div className="embed-responsive embed-responsive-16by9">
                                                    <iframe className="embed-responsive-item" src={this.props.video.VideoLink}></iframe>
                                                </div>
                                            </div>
                                            <div className="vid-text">
                                                <p><span>By</span> <a href="#">{this.props.video.UploadedBy}</a></p>
                                                <h1>{this.props.video.Title}</h1>
                                            </div>
                                            <div className="video-info-bar">
                                                <ul className="list-inline list-unstyled info-ul">
                                                    <li><i className="fa fa-calendar"></i><Moment interval={0} format="MMMM DD, YYYY">{this.props.video.UploadedDate}</Moment></li>
                                                    <li><i className="fa fa-eye"></i>{this.props.video.View}</li>
                                                    <li><i className="fa fa-thumbs-up"></i>{this.props.video.View}</li>
                                                    <li className="pull-right sharing-drop"><button className="btn"></button></li>
                                                </ul>
                                                <ul className="list-unstyled list-inline pull-right text-right sharing-bar">
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="video-detail-text" dangerouslySetInnerHTML={{__html:this.props.video.Description}}>
                                            </div>
                                            <CommentForm />
                                            <RelatedVideos />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <SideBar />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <Auxiliary>
                <Breadcrumb />
                {video}
            </Auxiliary>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        video: state.video.video
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchVideo: (videoId) => dispatch(actions.fetchVideo(videoId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Watch);