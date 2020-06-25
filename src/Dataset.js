import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {DatasetContent} from "./DatasetContent";


export class Dataset extends React.Component {

    state = {
        name: ""
    };

    componentDidMount() {
        const {name} = this.props.match.params;
        this.setState({
            "name": name,
            "codeBook": {},
            "indexAddingDimOpt": -1
        });
        this.getCodeBook();
    }


    async getCodeBook() {
        //curl -XGET "http://99.80.12.125:10100/v6/codebook/Example"
        // Actual request
        const requestOptions = {
            method: 'GET'
        };
        let demoResponse;
        try {
            const response = await fetch(this.ftbDomain + "/codebook" + this.props.match.params.name, requestOptions);
            // Actual Response
            demoResponse = await response.json();
        } catch {
            demoResponse = {
                "dataset": {
                    "name": "Example",
                    "digest": "24aca09d162196ce64c5801321fb31e8eab8670dae0a4a2859f560e979bcc556",
                    "description": "Example dataset for validation",
                    "size": 7,
                    "ruleRootVariable": "city"
                },
                "codebook": [{
                    "name": "city",
                    "label": "City",
                    "codes": ["0", "1", "2"],
                    "labels": ["London", "Liverpool", "Belfast"]
                }, {
                    "name": "sex",
                    "label": "Sex",
                    "codes": ["0", "1"],
                    "labels": ["Male", "Female"]
                }, {
                    "name": "siblings",
                    "label": "Number of siblings",
                    "codes": ["0", "1", "2", "3", "4", "5", "6"],
                    "labels": ["No siblings", "1 sibling", "2 siblings", "3 siblings", "4 siblings", "5 siblings", "6 or more siblings"]
                }, {
                    "name": "siblings_3",
                    "label": "Number of siblings (3 mappings)",
                    "codes": ["0", "1-2", "3+"],
                    "labels": ["No siblings", "1 or 2 siblings", "3 or more siblings"],
                    "mapFrom": ["siblings"],
                    "mapFromCodes": ["0", "1-2", "", "3+", "", "", ""]
                }]
            }
        }
        this.setState(({codeBook: demoResponse}));

    }

    render() {
        let dimensions = [];
        if (this.state.codeBook != null && this.state.codeBook.codebook != null) {
            let codeBook = this.state.codeBook.codebook;
            for (let i = 0; i < codeBook.length; i++) {
                let singleDim = <li id="filter-option"
                                    className="white-background margin-left-md--2 margin-right-md--2 margin-right-sm--1 margin-left-sm--1 filter-overview__add">
                    <div className="col--lg-56 min-height--10 padding-left-sm--0 padding-left-md--1">
                        <div className="col col--md-8 col--lg-8 min-height--4">
                            <a className="filter-overview__link--add"
                               href="/filters/c53f1a7c-ecf1-4abf-a104-f8f00cd57994/dimensions/aggregate"><span
                                className="dimension-button btn btn--tertiary margin-left-md--2 margin-left-sm--1  font-weight-700 ">Add <span
                                className="visuallyhidden">{codeBook[i].label}</span></span></a>
                        </div>
                        <div
                            className="dimension-name col col--md-11 col--lg-14 margin-left-sm--6 height-sm--3 height-md--6 overflow--hidden margin-top-md--3 margin-bottom-sm--2">
                            <strong><span id="filter-option-label"
                                          className="font-size-16">{codeBook[i].label}</span></strong></div>
                        <div id="number-added-aggregate" className="col col--md-20 col--lg-30">
                            <div
                                className="font-size--16 height-sm--3 height-md--10 nowrap-sm vertical-align-middle margin-left-sm--4 list--ellipses-sm overflow--hidden">
                                <div
                                    className="height-sm--3 max-height-md--9 vertical-align-middle__contents--md list--ellipses-md">
                                    <ul className="list list--pipe-seperated list--pipe-seperated-ellipses">
                                        <span>Nothing added</span>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>;
                dimensions.push(singleDim)
            }
        }

        return (
            <div>
                <Header/>
                <h1 className="wrapper">Dataset: {this.props.match.params.name}</h1>
                <div className="wrapper adjust-font-size--16 page-content link-adjust background--gallery">
                    <ul className="list--neutral filter-overview">
                        <li className="margin-left--0 padding-bottom--2 padding-top--0 padding-right--2 width-lg--56">
                            <a className="float-el--right-md float-el--right-sm float-el--right-lg"
                               href="/filters/c53f1a7c-ecf1-4abf-a104-f8f00cd57994/dimensions/clear-all">Clear
                                filters</a>
                        </li>
                        {dimensions}
                    </ul>
                    <div className="btn--no-click padding-bottom--4 padding-left--2 padding-top--2">
                        <div className="filter-overview__error-container" id="error-container"></div>
                        <form method="post" action="/filters/c53f1a7c-ecf1-4abf-a104-f8f00cd57994/submit">
                            <input id="preview-download" type="submit" value="Apply filters"
                                   className="btn btn--primary btn--primary-disabled btn--thick btn--wide btn--big btn--focus margin-right--2 font-weight-700 font-size--17"
                                   name="preview-and-download"/>
                        </form>
                    </div>
                </div>
                <DatasetContent/>
                <Footer/>
            </div>
        )
    }
}
