import React from 'react';

import './App.css';
import MockDatasets from "./assets/mock_responses/MockDatasets";

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div className="warning wrapper">
            Connection to ONS FTB instance failed, using Mock data on the frontend instead
        </div>
    );
}

export class Content extends React.Component {
    ftbDomain = "http://99.80.12.125:10100/v6";

    state = {
        "results": [],
        "warning": false

    };

    constructor(props) {
        super(props);
        this.state = {
            "searchString": '',
            "results": [],
            "warning": false
        };
    }

    componentDidMount() {
        this.getDatasets();
    }

    async getDatasets() {
        // Actual request
        const requestOptions = {
            method: 'GET',
            headers: new Headers({
                Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
            })
        };
        let connected = false;
        let data;
        try {
            const response = await fetch(this.ftbDomain + "/datasets", requestOptions);
            // Actual Response
            data = await response.json();
            if (response.status === 200) {
                connected = true;
            } else {
                connected = false;
            }

        } catch {
            // Fake response
            connected = false;

        }
        if (!connected) {
            data = MockDatasets;
        }
        this.setState({
            results: data,
            warning: !connected
        });

        return true;
    }

    render() {
        //results = this.state.results

        //For each element in results
        // create a new component that lists the name of the result and the description
        let displayList;
        if (this.state.results.length > 0) {
            displayList = this.state.results.map(function (singleResult) {
                return <li className="col col--md-34 col--lg-50 search-results__item search-result-item"><a
                    href={`${document.location.origin}/dp-census-frontend-ftb-filtering-poc/dataset/${singleResult.name}`}>{singleResult.name}</a>
                    <p className="search-results__meta">{singleResult.description}</p></li>;
            });
        }

        return (
            <div className="wrapper content">
                <WarningBanner warn={this.state.warning}/>
                <h1 className="wrapper">List of all datasets loaded in from FTB</h1>
                <div className="search-results">
                    <ul className="list--neutral flush">{displayList}</ul>
                </div>
            </div>
        )
    }
}
