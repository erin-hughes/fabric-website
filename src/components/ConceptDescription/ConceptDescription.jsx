import React from 'react';
import './ConceptDescription.css';


class ConceptDescription extends React.Component {

    render () {
        

        return (
            <div className='concept-description'>
                <h3 className="description-heading-one">{this.props.heading}</h3>
                <h4>{this.props.subheading}</h4>
                <p>{this.props.description}</p>
                
            </div>
        )
    }
}

export default ConceptDescription;