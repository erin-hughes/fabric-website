import React from 'react';
import './TileContainerOperatorsReferences.css';
import InteractiveTile from '../InteractiveTile/InteractiveTile';

class TileContainerOperatorsReferences extends React.Component {

    render () {
        let version = '2.1';
        let tileOneLink = 'https://hyperledger-fabric.readthedocs.io/en/latest/ops_guide.html';
        let tileTwoLink = 'https://hyperledger-fabric.readthedocs.io/en/latest/command_ref.html';
        if (this.props.fabricVersion === '2.0') {
            version = this.props.fabricVersion;
            tileOneLink = 'https://hyperledger-fabric.readthedocs.io/en/release-2.0/ops_guide.html';
            tileTwoLink = 'https://hyperledger-fabric.readthedocs.io/en/release-2.0/command_ref.html';
        } else if (this.props.fabricVersion === '1.4') {
            version = this.props.fabricVersion;
            tileOneLink = 'https://hyperledger-fabric.readthedocs.io/en/release-1.4/ops_guide.html';
            tileTwoLink = 'https://hyperledger-fabric.readthedocs.io/en/release-1.4/command_ref.html';
        }


        return (

            <div className='tile-container-operators'> 
                <InteractiveTile
                        heading={'Operations guides'}
                        version={version}
                        description={'Task-level guidance on how to go about some of the most \
                        common Fabric operational tasks.'} 
                        link={tileOneLink}/>
                <InteractiveTile 
                        heading={'Commands reference'}
                        version={version}
                        description={'Directory of Fabric commands used in operational tasks.'} 
                        link={tileTwoLink}/>
            </div>
        )
    }
}

export default TileContainerOperatorsReferences;