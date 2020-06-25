import React from 'react';
import censusLogo from './assets/Census2021_whiteback.png'
import './App.css';


export class Header extends React.Component {
    render() {
        return <header>
            <div className="wrapper">
                <div className="header col-wrap">
                    <div className="col">
                        <img className="logo top-logo"
                             src="https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg"
                             alt="Office for National Statistics"/>
                        <img className="logo top-logo" src={censusLogo}
                             alt="Census 2021 logo"/>
                    </div>
                </div>
            </div>
            <div className="primary-nav print--hide page-title font-size--sm">
            </div>
        </header>
    }
}
