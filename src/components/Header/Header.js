import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div id="main-navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-sm-12">
                            <div id="cssmenu">
                                <div id="menu-button">Menu</div>
                                <ul>
                                    <li className="active"><a href="#"><i className="fi ion-ios-home"></i>Home</a>
                                        <ul>
                                            <li><a href="index.html">Home V1</a>
                                                <ul>
                                                    <li><a href="index.html">Home V1</a></li>
                                                    <li><a href="./index-left-sidebar.html">With Left Sidebar</a></li>
                                                    <li><a href="./index-without-sidebar.html">Without Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href=".-v2/index-v2.html">Home V2</a>
                                                <ul>
                                                    <li><a href="http://layerstheme.com/developers/jamshaid/video-demo/video-v2/index-v2.html">Home V2</a></li>
                                                    <li><a href="http://layerstheme.com/developers/jamshaid/video-demo/video-v2/index-left-sidebar.html">With Left Sidebar</a></li>
                                                    <li><a href="http://layerstheme.com/developers/jamshaid/video-demo/video-v2/index-without-sidebar.html">Without Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><i className="fi ion-ios-film-outline"></i>Video Styles</a>
                                        <ul>
                                            <li><a href="http://layerstheme.com/developers/jamshaid/video-demo/video/video-2-column.html">Video 2 Column</a></li>
                                            <li><a href="http://layerstheme.com/developers/jamshaid/video-demo/video/video-3-column.html">Video 3 Column</a></li>
                                            <li><a href="http://layerstheme.com/developers/jamshaid/video-demo/video/video-4-column.html">Video 4 Column</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><i className="fi ion-android-apps"></i>Category</a>
                                        <ul>
                                            <li><a href="http://layerstheme.com/developers/jamshaid/video-demo/video/categories.html">Categories</a></li>
                                            <li><a href="http://layerstheme.com/developers/jamshaid/video-demo/video/category-listing.html">Category Listing</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><i className="fi ion-compose"></i>Blog</a>
                                        <ul>
                                            <li><a href="http://layerstheme.com/developers/jamshaid/video-demo/video/blog-grid.html">Blog Grid Style</a></li>
                                            <li><a href="http://layerstheme.com/developers/jamshaid/video-demo/video/blog-listing.html">Blog Listing Style</a></li>
                                            <li><a href="http://layerstheme.com/developers/jamshaid/video-demo/video/blog-detail.html">Blog Detail</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="http://layerstheme.com/developers/jamshaid/video-demo/video/tv.html"><i className="fi ion-android-desktop"></i>Tv</a></li>
                                    <li><a href="http://layerstheme.com/developers/jamshaid/video-demo/video/about.html"><i className="fi ion-person"></i>About</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 text-right hidden-sm hidden-xs">
                            <button type="button" className="btn btn-default btn-create-album">
                                Create Album
					</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default Header;