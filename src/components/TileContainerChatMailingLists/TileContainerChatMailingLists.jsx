import React from 'react';
import './TileContainerChatMailingLists.css';
import InteractiveTile from '../InteractiveTile/InteractiveTile';

class TileContainerChatMailingLists extends React.Component {

    render () {

        return (

            <div className='tile-container-chat-mailinglists' >
                
                <InteractiveTile 
                    heading={'Community'}
                    description={'To join any of the \
                    communication channels, check out the \
                    “Community” section on the Fabric Github ReadMe.'} 
                    link={'https://github.com/hyperledger/fabric/blob/master/README.md'} />
           
            </div>
        )
    }
}

export default TileContainerChatMailingLists;