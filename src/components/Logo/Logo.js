import React, { Component } from 'react';
import burgerLogo from '../../assets/images/logo.png';
class Logo extends Component {
    render() {
        return (
            <img src={burgerLogo} alt="MyTube" className="img-responsive" />
        )
    }
}
export default Logo;