import React from 'react';
import './FooterContainer.css';
import FooterItem from '../FooterItem/FooterItem';

class FooterContainer extends React.Component {
    render () {
        return (
            <div className='footer-container'>
                <FooterItem
                heading='Hyperledger Fabric'
                links={[
                    <a>Home</a>,
                    <a href='https://stackoverflow.com/questions/tagged/hyperledger-fabric'>StackOverflow</a>,
                    <a href='https://wiki.hyperledger.org/display/fabric/Hyperledger+Fabric'>Hyperledger Fabric Wiki</a>,
                    <a href='https://hyperledger-fabric.readthedocs.io/en/release-2.0/'>Documentation</a>
                ]}
            />    
            </div>
        )
    }
}

export default FooterContainer;
