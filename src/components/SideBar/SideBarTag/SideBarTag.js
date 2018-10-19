import React, { Component } from 'react';

class SideBarTag extends Component {
    render() {
        return (
            <div className="tags">
                <h1 className="sidebar-heading">Tags</h1>
                <ul className="list-inline list-unstyled">
                    <li><a href="#">3D</a></li>
                    <li><a href="#">Animals &amp; Birds</a></li>
                    <li><a href="#">HD</a></li>
                    <li><a href="#">Horror</a></li>
                    <li><a href="#">Art</a></li>
                    <li><a href="#">Self</a></li>
                    <li><a href="#">HD Songs</a></li>
                    <li><a href="#">Comedy</a></li>
                </ul>
            </div>
        )
    }
};
export default SideBarTag;