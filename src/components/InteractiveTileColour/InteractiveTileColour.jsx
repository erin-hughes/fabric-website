import React from 'react';
import './InteractiveTileColour.css';
import goToExternalLink from '../../res/launch.svg';


class InteractiveTileColour extends React.Component {

    constructor(props) {
        super(props);

        this.redirectToLink = this.redirectToLink.bind(this);
    }
    
    redirectToLink() {
        window.location.href = this.props.link;
    }

    render () {

        return (

       
            <div className='interactive-tile-colour' onClick={this.redirectToLink}> 
                 
                 <img className={this.props.logoStyle} src={this.props.logo}></img>
                 <h3 className='tile-heading-colour'>{this.props.headingColour}</h3>
                 <p className='version-number'>{this.props.version}</p>
                 <p className='documentation-link'>{this.props.descriptionColour}</p>
                 <img src={goToExternalLink} alt="Let's go" className="go-to-page-icon-colour"></img>
                 
            </div>
        ) 
    }
}

export default InteractiveTileColour;