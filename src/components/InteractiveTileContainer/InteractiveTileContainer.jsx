import React from 'react';
import InteractiveTile from '../InteractiveTile/InteractiveTile';
import './InteractiveTileContainer.css';

class InteractiveTileContainer extends React.Component {

    render() {

        return (

            <div className="interactive-tile-container">
                <InteractiveTile 
                heading={'Operators'}
                description={'Operators create and maintain Fabric networks. They also deploy smart contracts created by developers.'}
                />
                <InteractiveTile
                heading={'Developers'}
                description={'Developers create smart contracts which definte the use cases of Fabric networks, or client applications that transact on Fabric networks.'}
                />
                <InteractiveTile
                heading={'Community & Contributors'}
                description={'Contribute to the Fabric codebase, or join the discussion with other users.'}
                />
            </div>
        )
    }
}

export default InteractiveTileContainer;