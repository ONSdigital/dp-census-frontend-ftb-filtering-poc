import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {DatasetDimOpt} from "./DatasetDimOpt";
import {DatasetFilterOptionMenu} from "./DatasetFilterOptionMenu";
import MockCodeBook from "./assets/mock_responses/MockCodeBook";


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
            demoResponse = MockCodeBook;
        }
        this.setState(({codeBook: demoResponse}));

    }

    render() {
        let dimensions = [];
        if (this.state.codeBook != null && this.state.codeBook.codebook != null) {
            let codeBook = this.state.codeBook.codebook;
            for (let i = 0; i < codeBook.length; i++) {
                let singleDim = <DatasetDimOpt label={codeBook[i].label}/>;
                dimensions.push(singleDim)
            }
        }

        return (
            <div>
                <Header/>
                <h1 className="wrapper">Dataset: {this.props.match.params.name}</h1>
                <DatasetFilterOptionMenu dimensions={dimensions}/>
                <Footer/>
            </div>
        )
    }
}
