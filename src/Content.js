import React from 'react';

import './App.css';

export class Content extends React.Component {
    // ONS instance
    //ftbDomain = "http://99.80.12.125:10100/v6";
    // Sensible code instance
    ftbDomain = "http://99.80.12.125:10100/v6";

    state = {
        results: []
    };

    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            results: []
        };
    }

    componentDidMount() {
        this.getDatasets();
    }

    setSearchInput(input) {
        this.setState({searchString: input});
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const submitSuccess = await this.submitForm();
        this.setState({submitSuccess});
    };

    async getDatasets() {
        // Actual request
        const requestOptions = {
            method: 'GET'
        };
        let data;
        try {
            const response = await fetch(this.ftbDomain + "/datasets", requestOptions);
            // Actual Response
            data = await response.json();
        } catch {
            // Fake response
            data = [
                {
                    "name": "Example",
                    "digest": "24aca09d162196ce64c5801321fb31e8eab8670dae0a4a2859f560e979bcc556",
                    "description": "Example dataset for validation",
                    "size": 7,
                    "ruleRootVariable": "city"
                }
            ];
        }

        this.setState(({results: data}));

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
                    href={document.location.href + "/dataset/" + singleResult.name}>{singleResult.name}</a>
                    <p className="search-results__meta">{singleResult.description}</p></li>;
            });
        }

        return (
            <div className="wrapper">
                <h1>List of all datasets loaded in from FTB</h1>
                <div className="search-results">
                    <ul className="list--neutral flush">{displayList}</ul>
                </div>
            </div>
        )
    }
}
