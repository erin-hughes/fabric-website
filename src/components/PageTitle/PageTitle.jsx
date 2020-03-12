import React from 'react';
import './PageTitle.css';


class PageTitle extends React.Component {

    render() {
        return (

            <div>
                <div className="page-title">What would you like to use Hyperledger<br />
                Fabric for?<br/></div>
                <div className="title-subheading">The best place to start depends on whether you want to operate Fabric networks or develop smart<br />
                contracts and/or client applications. This short overview will help you pick!<br/></div>
            </div>
        )
        }
    }

export default PageTitle;