import React, { Component } from 'react';
import SideBarVideos from './SideBarVideos/SideBarVideos';
import {sideBarVideoType} from '../../shared/staticString';
import SideBarTag from './SideBarTag/SideBarTag';
class SideBar extends Component {
    render() {
        console.log(sideBarVideoType.small);
        return (
            <div className="sidebar">
                <SideBarVideos title="Most Liked" type={sideBarVideoType.small}/>
                <SideBarVideos title="Most Viewed" type={sideBarVideoType.full}/>
                <SideBarTag/>
            </div>
        )
    }
};
export default SideBar;