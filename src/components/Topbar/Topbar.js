import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import userLogo from '../../assets/images/user.svg';
import {Link} from 'react-router-dom';
class Topbar extends Component {
    render() {
        return (
            <div id="main-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-5 col-xs-6 border-right">
                            <div className="logo">
                                <Link to="/">
                                    <Logo></Logo>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-7 col-xs-6 hidden-md hidden-lg text-right">
                            <button type="button" className="btn btn-default btn-create-album">
                                Create Album
					</button>
                        </div>
                        <div className="clearfix visible-sm"></div>
                        <div className="clearfix visible-xs"></div>
                        <div className="col-md-6 col-sm-4 border-right sm-border-top">
                            <div className="search-box">
                                {/* <form method="post"> */}
                                    <input type="text" name="search" id="search" className="form-control" placeholder="Search Albums" required onChange={this.props.changed}/>
                                    <button type="submit" className="search-icon" onClick={this.props.searched}>
                                        <i className="fa fa-search"></i>
                                    </button>
                                {/* </form> */}
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 sm-border-top">
                            <div className="social-icon">
                                <ul className="list-inline list-unstyled">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 border-left sm-border-top">
                            <div className="login">
                                <div className="media">
                                    <div className="media-left">
                                        <img className="img-responsive play-svg svg" src={userLogo} alt="play" />
                                    </div>
                                    <div className="media-body">
                                        <p>
                                            Welcome Guest <a className="login-toggle" href="#">Login</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Topbar;