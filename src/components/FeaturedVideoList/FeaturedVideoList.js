import React, { Component } from 'react';
import FeaturedVideo from './FeaturedVideo/FeaturedVideo';

class FeaturedVideoList extends Component {
    render() {
        let videos = null;
        if (this.props.videos) {
            videos = Object.keys(this.props.videos).map(vkey => {
                return (
                    <div  key={vkey} className={this.props.videos[vkey].Large?"col-md-6 col-sm-12 md-grid":"col-md-3 col-sm-6 small-grid"}>
                        <FeaturedVideo video={this.props.videos[vkey]} /></div>)
            });
        }
        return (
            <div className="row overflow-hidden">
                {videos}
            </div>
        )
    }
};
export default FeaturedVideoList;