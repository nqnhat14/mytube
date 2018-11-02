import React, { Component } from 'react';

class Breadcrumb extends Component {
    render() {
        return (
            <div id="page-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-8 col-xs-12">
                            <div className="page-title">
                                <h1 className="text-uppercase">Video Detail</h1>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-12 text-right">
                            <ul className="breadcrumb">
                                <li>
                                    <a href="index.html"><i className="fi ion-ios-home"></i>Home</a>
                                </li>
                                <li className="active">Video Detail</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Breadcrumb;