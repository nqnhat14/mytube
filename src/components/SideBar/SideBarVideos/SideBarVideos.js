import React, { Component } from 'react';
import sideBarImg from '../../../assets/images/most-liked-img-s1.jpg';
import SideBarVideo from './SideBarVideo/SideBarVideo';
import {sideBarVideoType} from '../../../shared/staticString';
class SideBarVideos extends Component {
    render() {
        const sidebarItems = [];
        for (let i = 0; i < 4; i++) {
            sidebarItems.push(<SideBarVideo key={i} type={this.props.type}></SideBarVideo>)
        }
        return (
            <div className={["sidebar-vid",this.props.type===sideBarVideoType.full?"most-viewd":"most-liked"].join(" ")}>
                <h1 className="sidebar-heading">{this.props.title}</h1>
                {sidebarItems}
            </div>
        )
    }
}
export default SideBarVideos;