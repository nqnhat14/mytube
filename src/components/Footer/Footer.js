import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import img1 from '../../assets/images/most-like-img-1.jpg';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
class Footer extends Component {
    render() {
        return (
            <Auxiliary>
                <div id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-about">
                                    <div className="vid-heading">
                                        <span>About</span>
                                        <div className="hding-bottm-line"></div>
                                    </div>
                                    <Logo />
                                    <p>
                                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequatauctor eu in elit.  className aptent tac Duis sed odio s psum velit.
						        </p>
                                    <ul className="bottom-social list-inline list-unstyled">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="bottom-post">
                                    <div className="vid-heading">
                                        <span>Latest Posts</span>
                                        <div className="hding-bottm-line"></div>
                                    </div>
                                    <div className="latest-post">
                                        <div className="media">
                                            <div className="media-left">
                                                <img src={img1} alt="video" />
                                            </div>
                                            <div className="media-body">
                                                <h1><a href="./blog-detail.html">Stalker Game</a></h1>
                                                <p>
                                                    <span><i className="fa fa-comment"></i> 10</span>
                                                    <span><i className="fa fa-eye"></i> 534</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left">
                                                <img src={img1} alt="video" />
                                            </div>
                                            <div className="media-body">
                                                <h1><a href="./blog-detail.html">Martial Art</a></h1>
                                                <p>
                                                    <span><i className="fa fa-comment"></i> 10</span>
                                                    <span><i className="fa fa-eye"></i> 534</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left">
                                                <img src={img1} alt="video" />
                                            </div>
                                            <div className="media-body">
                                                <h1><a href="./blog-detail.html">Streat Crime</a></h1>
                                                <p>
                                                    <span><i className="fa fa-comment"></i> 10</span>
                                                    <span><i className="fa fa-eye"></i> 534</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="bottom-categories">
                                    <div className="vid-heading">
                                        <span>Categories</span>
                                        <div className="hding-bottm-line"></div>
                                    </div>
                                    <ul className="category-list list-unstyled">
                                        <li><a href="./category-listing.html">Action</a></li>
                                        <li><a href="./category-listing.html">Adventure</a></li>
                                        <li><a href="./category-listing.html">War</a></li>
                                        <li><a href="./category-listing.html">Romance</a></li>
                                        <li><a href="./category-listing.html">Comedy</a></li>
                                        <li><a href="./category-listing.html">Horror</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="sendus">
                                    <div className="vid-heading">
                                        <span>Send Us Message</span>
                                        <div className="hding-bottm-line"></div>
                                    </div>
                                    <div id="contact-form">
                                        <div className="expMessage"></div>
                                        <form className="send-form">
                                            <input type="text" name="formInput[name]" id="name" className="form-control half-wdth-field" placeholder="Name" required />
                                            <input type="email" name="formInput[email]" id="email" className="form-control half-wdth-field pull-right" placeholder="Email" required />

                                            <textarea name="formInput[message]" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                                            <input type="hidden" name="action" value="submitform" />
                                            <div>
                                                <button type="submit" value="submit" className="btn btn-send">
                                                    Submit
									</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <p>
                                    Copyright 2016 by My Tube. All right reserved. Template by <a href="http://www.ewebcraft.com/">ewebcraft</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Auxiliary>
        )
    }
};
export default Footer;