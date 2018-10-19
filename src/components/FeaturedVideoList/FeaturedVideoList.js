import React, { Component } from 'react';
import FeaturedVideo from './FeaturedVideo/FeaturedVideo';

class FeaturedVideoList extends Component {
    render() {
        return (
            <div class="row overflow-hidden">
                <div class="col-md-6 col-sm-12 md-grid">
                    <FeaturedVideo />
                </div>
                <div class="col-md-3 col-sm-6 small-grid">
                    <FeaturedVideo />
                </div>
                <div class="col-md-3 col-sm-6 small-grid">
                    <FeaturedVideo />
                </div>
                <div class="col-md-3 col-sm-6 small-grid">
                    <FeaturedVideo />
                </div>
                <div class="col-md-3 col-sm-6 small-grid">
                    <FeaturedVideo />
                </div>
            </div>
        )
    }
};
export default FeaturedVideoList;