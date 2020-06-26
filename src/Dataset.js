import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {DatasetDim} from "./DatasetDim";
import {DatasetFilterOptionMenu} from "./DatasetFilterOptionMenu";
import {DimensionOptSelector} from "./DimensionOptSelector";
import MockCodeBook from "./assets/mock_responses/MockCodeBook";

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

export class Dataset extends React.Component {

    state = {
        name: ""
    };

    dimensionClickedFuncs = [];

    componentDidMount() {
        const {name} = this.props.match.params;
        this.setState({
            "name": name,
            "codeBook": {},
            "indexAddingDimOpt": -1,
            "warning": false
        });
        this.getCodeBook();
    }


    async getCodeBook() {
        //curl -XGET "http://99.80.12.125:10100/v6/codebook/Example"
        // Actual request
        const requestOptions = {
            method: 'GET'
        };
        let connected = false;
        let demoResponse;
        try {
            const response = await fetch(this.ftbDomain + "/codebook" + this.props.match.params.name, requestOptions);
            // Actual Response
            demoResponse = await response.json();
            connected = true;
        } catch {
            connected = false;
            demoResponse = MockCodeBook;
        }

        if (demoResponse != null && demoResponse.codebook != null) {
            for (let i = 0; i < demoResponse.codebook.length; i++) {
                this.dimensionClickedFuncs.push(
                    () => {
                        this.setState(
                            {indexAddingDimOpt: i}
                        )
                    },
                )
            }
        }

        this.setState(({
            codeBook: demoResponse,
            warning: !connected
        }));

    }

    render() {
        let dimensions = [];
        let dimOptSelector;
        if (this.state.codeBook != null && this.state.codeBook.codebook != null) {
            let codeBook = this.state.codeBook.codebook;
            for (let i = 0; i < codeBook.length; i++) {
                let singleDim = <DatasetDim label={codeBook[i].label} dimClicked={this.dimensionClickedFuncs[i]}/>;
                dimensions.push(singleDim)
            }
            console.log("this.state.indexAddingDimOpt >-1");
            console.log(this.state.indexAddingDimOpt >-1);
            dimOptSelector = <DimensionOptSelector showDim={this.state.indexAddingDimOpt >-1} dimCodeBook={this.state.codeBook.codebook[this.state.indexAddingDimOpt]}/>
        }
        return (
            <div>
                <Header/>
                <WarningBanner warn={this.state.warning}/>
                <h1 className="wrapper">Dataset: {this.props.match.params.name}</h1>
                <DatasetFilterOptionMenu
                    showDim={this.state.indexAddingDimOpt < 0}
                    dimensions={dimensions}
                />
                {dimOptSelector}
                <Footer/>
            </div>
        )
    }
}
