import React from 'react';
import './InteractiveTile.css';
import goToPage from '../../res/arrow--right.svg';

class InteractiveTile extends React.Component {

    constructor(props) {
        super(props);

        this.redirectToLink = this.redirectToLink.bind(this);
    }
    
    redirectToLink() {
        window.location.href = this.props.link;
    }

    render () {

        return (

       
            <div className='interactive-tile' onClick={this.redirectToLink}> 
                 
                 <h3 className='tile-heading'>{this.props.heading}</h3>
                 <p className='version-number'>{this.props.version}</p>
                 <p>{this.props.description}</p>
                 <img src={goToPage} alt="Let's go" className="go-to-page-icon"></img>
                 
            </div>
        )
    }
}

export default InteractiveTile;