import React from 'react';
import './NavBar.css';
import fabricLogo from '../../res/Hyperledger Fabric Logo.png';

class NavBar extends React.Component {

    render() {

        return (
            <div className="navbar-container">
                <a href='/'>
                <img src={fabricLogo} alt="Fabric" className="navbar-logo"></img>
                </a>
                <div className="navbar-title">Hyperledger <span className="navbar-title-red">Fabric</span></div>
                <div className="navbar-link-container">
                    <a href='/' className="navbar-text-link">Overview</a>
                    <a href='/operators' className="navbar-text-link">Operators</a>
                    <a href='/developers' className="navbar-text-link">Developers</a>
                    <a href='/communitycontributors' className="navbar-text-link">Community and Contributors</a>
                </div>
            </div>
        )
    }
}

export default NavBar;
