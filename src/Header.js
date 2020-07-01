import React from 'react';
import censusLogo from './assets/Census2021_whiteback.png'
import './App.css';


export class Header extends React.Component {
    render() {
        return <header>
            <div className="wrapper">
                <div className="header col-wrap">
                    <div className="col">
                        <a
                            href="http://99.80.12.125/">
                            <img className="logo top-logo"
                                 src="https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg"
                                 alt="Office for National Statistics"

                            />
                        </a>
                            <img className="logo top-logo" src={censusLogo}
                                 alt="Census 2021 logo"/>
                        <a
                            href="http://99.80.12.125/dp-census-frontend-ftb-filtering-poc/">
                            <div className="restart">Start journey again</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="primary-nav print--hide page-title font-size--sm">
            </div>
        </header>
    }
}
