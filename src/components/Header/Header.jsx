import React from 'react';
import './Header.css';
import pageHeaderBackground from '../../res/Fabric website header.svg';

class Header extends React.Component {

    render() {
        return (

            <div>
                <img src={pageHeaderBackground} alt="Page Header" className="header-background"></img>
                <h1 className="header-title">Welcome to <br />
                Hyperledger Fabric<br/></h1>
                <div className="header-text">Hyperledger Fabric is an enterprise-grade<br />
                permissioned distributed lefger framework for<br />
                developing solutions and applications. Its<br />
                modular and versatile design satisfies a broad<br />
                range of industry use cases. It offers a unique<br />
                approach to consensus that enables performance<br />
                at scale while preserving privacy.</div>
            </div>
            
        )
    }
}

export default Header;

/* header-text is appearing to the right of the image
Began thinking about how the text can be taken out of here and made into a function, then called upon from HeaderText.jsx */