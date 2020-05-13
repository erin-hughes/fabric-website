import React from 'react';
import './TileContainerOperatorsIntro.css';
import InteractiveTile from '../InteractiveTile/InteractiveTile';

class TileContainerOperatorsIntro extends React.Component {



    render () {

        return (

            <div className='tile-container-operators'>
                
                <InteractiveTile 
                    heading={'Building your first network'}
                    description={'A set of scripts and tutorial explanation to help you \
                    build your first Fabric network from scratch.'}
                    openInThisTab={false}
                    link={'https://hyperledger-fabric.readthedocs.io/en/release-1.4/build_network.html'}/>
            </div>
        )
    }
}

export default TileContainerOperatorsIntro;