import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Footer} from "./Footer";
import MockFilterResult from "./assets/mock_responses/MockFilterResult";

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

export class Results extends React.Component {

    ftbDomain = "http://99.80.12.125:10100/v6";

    constructor(props) {
        super(props);
        this.state = {
            results: "",
        };
    }


    componentDidMount() {
        this.setState({});
        this.getFilterResults();
    }


    async getFilterResults() {
        // Actual request
        const requestOptions = {
            method: 'GET',
            headers: new Headers({
                Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
            })
        };
        let connected = false;
        let demoResponse;
        try {
            const response = await fetch(`${this.ftbDomain}/query/${this.props.match.params.dataset}${window.location.search}`, requestOptions);
            // Actual
            demoResponse = await response.json();
            connected = true;
        } catch {
            connected = false;
            demoResponse = MockFilterResult;
        }

        this.setState(({
            results: demoResponse,
            warning: !connected,
        }));

    }

    render() {
        return <div className="page-container">
            <Header/>
            <div className="wrapper content">
                <WarningBanner warn={this.state.warning}/>
                <br/>
                <div><pre>{JSON.stringify(this.state.results, null, 2)}</pre></div>
            </div>
            <Footer/>
        </div>
    }
}
