import React from 'react';
import './Testing.css';

class Testing extends React.Component {

    constructor(){
        super(props)
        this.state = {
            listOpen: false,
            headerTitle: this.props.title }


          location: [
            {
                id: 0,
                title: 'v2.1',
                selected: false,
                key: 'location'
            },
            {
              id: 1,
              title: 'v2.0',
              selected: false,
              key: 'location'
            },
            {
              id: 2,
              title: 'v1.4',
              selected: false,
              key: 'location'
            }
          ]
        }
      }

    render() {
        return (

            <div>
                <h1 className="test">Hello World!</h1>
                <Dropdown
                    title="Select Fabric version"
                    list={this.state.location} />
/>
            </div>
            
        )
    }
}

export default Testing;
