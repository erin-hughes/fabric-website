import React from 'react';
import './NavBar.css';
import fabricLogo from '../../res/Hyperledger Fabric Logo.png';

class NavBar extends React.Component {

    render() {
        return (
            <div className="navbar-container">
                <img src={fabricLogo} alt="Fabric" className="navbar-logo"></img>
                <div className="navbar-title">Hyperledger Fabric</div>
                <div className="navbar-button-container">
                    <button>Overview</button>
                    <button>Operators</button>
                    <button>Developers</button>
                    <button>Community and Contributors</button>
                </div>
            </div>
        )
    }

}

export default NavBar;
