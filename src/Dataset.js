import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {DatasetDim} from "./DatasetDim";
import {DatasetFilterOptionMenu} from "./DatasetFilterOptionMenu";
import {DimensionOptSelector} from "./DimensionOptSelector";
import MockCodeBook from "./assets/mock_responses/MockCodeBook";


// Code: [vars,vars]
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

    constructor(props) {
        super(props);
        this.getFilterSelection = this.getFilterSelection.bind(this);
        this.filterUpdateFunc = this.filterUpdateFunc.bind(this);
        this.closeDimensionOptMenu = this.closeDimensionOptMenu.bind(this);
        this.state = {
            filter: {}
        }
    }

    filterUpdateFunc(code, filter) {
        let newFilter = {[code]: filter};
        let filterObj = Object.assign(this.state.filter, newFilter);

        this.setState({filter: filterObj})
    }; // TODO implement filter updateFuncs - save which codes and vars selected in this state

    closeDimensionOptMenu() {
        this.setState(
            {indexAddingDimOpt: -1}
        )
    }

    componentDidMount() {
        const {name} = this.props.match.params;
        this.setState({
            "name": name,
            "codeBook": {},
            "indexAddingDimOpt": -1,
            "warning": false,
            "filter": {}
        });
        this.getCodeBook();
    }


    async getCodeBook() {
        //curl -i - h Authorization: Bearer ${AUTH_TOKEN} "http://99.80.12.125:10100/v6/codebook/Example"
        // Actual request
        const requestOptions = {
            method: 'GET'
        };
        let connected = false;
        let demoResponse;
        try {
            const response = await fetch(this.ftbDomain + "/codebook" + this.props.match.params.name, requestOptions);
            // Actual
            demoResponse = await response.json();
            connected = true;
        } catch {
            connected = false;
            demoResponse = MockCodeBook;
        }

        if (demoResponse != null && demoResponse.codebook != null) {
            for (let i = 0; i < demoResponse.codebook.length; i++) {
                this.dimensionClickedFuncs.push(
                    () => { // TODO implement closed
                        this.setState(
                            {indexAddingDimOpt: i} // If open then which index if closed set to -1
                        )
                    },
                    // (open) => { // TODO implement closed
                    //     this.setState(
                    //         {indexAddingDimOpt: open ? i : -1} // If open then which index if closed set to -1
                    //     )
                    // },
                );
            }
        }

        this.setState(({
            codeBook: demoResponse,
            warning: !connected
        }));

    }

    getFilterSelection(index) {
        let filterSelection = [];
        if (this.state.filter[this.state.codeBook.codebook[index].name] != null) {
            let filterName = this.state.codeBook.codebook[index].name;
            for (const code in this.state.filter[filterName]) {
                if( this.state.filter[filterName][code] === true){
                    const indexOfCode = this.state.codeBook.codebook[index].codes.indexOf(code);
                    filterSelection.push(this.state.codeBook.codebook[index].labels[indexOfCode])
                }
            }
        }
        return filterSelection;
    }

    render() {
        let dimensions = [];
        let dimOptSelector;
        if (this.state.codeBook != null && this.state.codeBook.codebook != null) {
            let codeBook = this.state.codeBook.codebook;
            for (let i = 0; i < codeBook.length; i++) {
                let filterSelection = this.getFilterSelection(i);


                let singleDim = <DatasetDim
                    label={codeBook[i].label}
                    dimClicked={this.dimensionClickedFuncs[i]}
                    filterSelection={filterSelection}
                />;
                dimensions.push(singleDim)
            }
            let filtersSelected = {};
            if (this.state.codeBook.codebook[this.state.indexAddingDimOpt] != null && this.state.filter[this.state.codeBook.codebook[this.state.indexAddingDimOpt]] != null) {
                filtersSelected = this.state.filter[this.state.codeBook.codebook[this.state.indexAddingDimOpt]]
            }
            dimOptSelector = <DimensionOptSelector showDim={this.state.indexAddingDimOpt > -1}
                                                   dimCodeBook={this.state.codeBook.codebook[this.state.indexAddingDimOpt]}
                                                   filterUpdate={this.filterUpdateFunc}
                                                   closeDimensionOptMenu={this.closeDimensionOptMenu}
                                                   filters={filtersSelected}
            />
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
