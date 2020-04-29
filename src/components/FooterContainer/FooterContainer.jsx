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
                        <a href='/'>Home</a>,
                        <a href='https://stackoverflow.com/questions/tagged/hyperledger-fabric'>StackOverflow</a>,
                        <a href='https://wiki.hyperledger.org/display/fabric/Hyperledger+Fabric'>Hyperledger Fabric Wiki</a>,
                        <a href='https://hyperledger-fabric.readthedocs.io/en/release-2.0/'>Documentation</a>
                    ]}
                />    
                <FooterItem
                    heading='Find us'
                    links={[
                        <a href='https://github.com/hyperledger/fabric'>Github</a>,
                        <a href='https://chat.hyperledger.org/home'>Rocket Chat</a>,
                        <a href='https://twitter.com/Hyperledger?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>Twitter</a>,
                        <a href='https://www.youtube.com/channel/UCCFdgCWH_1vCndMPVqQlwZw'>Youtube</a>
                    ]}
                />
                <FooterItem
                    heading='Linux Foundation'
                    links={[
                        <a href='https://www.linuxfoundation.org/privacy/'>Privacy Policy</a>,
                        <a href='https://www.linuxfoundation.org/terms/'>Terms of Service</a>
                    ]}
                />
                
            </div>
        )
    }
}

export default FooterContainer;
