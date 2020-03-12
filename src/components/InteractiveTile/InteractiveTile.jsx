import React from 'react';
import './InteractiveTile.css';
import goToPage from '../../res/arrow--right.svg';
import tileLightGrey from '../../res/tile--lightgrey.svg';

class InteractiveTile extends React.Component {

    render () {

        return (

       
            <div className='interactive-tile'> 
                 
                 <h3 className='tile-heading'>{this.props.heading}</h3>
                 <p>{this.props.description}</p>
                 <img src={goToPage} alt="Let's go" className="go-to-page-icon"></img>
                 
            </div>
        )
    }
}

export default InteractiveTile;