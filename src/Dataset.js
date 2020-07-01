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
    ftbDomain = "http://99.80.12.125:10100/v6";

    constructor(props) {
        super(props);
        this.getFilterSelection = this.getFilterSelection.bind(this);
        this.filterUpdateFunc = this.filterUpdateFunc.bind(this);
        this.closeDimensionOptMenu = this.closeDimensionOptMenu.bind(this);
        this.getFilterQuery = this.getFilterQuery.bind(this);
        this.state = {
            filter: {},
            ruleRootVariable: ""
        }
    }

    getFilterQuery() {
        // ruleRootVar has to be the first element in query
        let filterQueryPart1 = `dim=${this.state.ruleRootVariable}`;
        let filterQueryPart2 = `&incl=${this.state.ruleRootVariable},`; // Don't need to be the first item
        for (const code in this.state.filter[this.state.ruleRootVariable]) {
            if (this.state.filter[this.state.ruleRootVariable][code] === true) {
                filterQueryPart2 += `${code},`;
            }
        }
        // remove any trailing comma
        filterQueryPart2 = filterQueryPart2.replace(/,\s*$/, "");

        for (const dim in this.state.filter) {
            if (dim === this.state.ruleRootVariable) {
                continue;
            }
            let dimOptString = "";
            for (const dimOpt in this.state.filter[dim]) {
                if (this.state.filter[dim][dimOpt] === true) {
                    dimOptString += `${dimOpt},`;
                }
            }
            if (dimOptString !== "") {
                filterQueryPart1 += `&dim=${dim}`;
                filterQueryPart2 += `&incl=${dim},${dimOptString}`;
                // remove any trailing comma
                filterQueryPart2 = filterQueryPart2.replace(/,\s*$/, "");
            }
        }
        console.log(`FILTER OUTPUT IS: ${filterQueryPart1}${filterQueryPart2}`);
        return filterQueryPart1 + filterQueryPart2;
    }

    filterUpdateFunc(code, filter) {
        let newFilter = {[code]: filter};
        let filterObj = Object.assign(this.state.filter, newFilter);

        this.setState({filter: filterObj})
    }; // TODO implement filter updateFuncs - save which codes and vars selected in this state

    closeDimensionOptMenu() {
        let canFilter = false;
        for (const dimOpt in this.state.filter[this.state.ruleRootVariable]) {
            if (this.state.filter[this.state.ruleRootVariable][dimOpt] === true) {
                canFilter = true;
            }
        }

        this.setState(
            {
                indexAddingDimOpt: -1,
                canFilter: canFilter
            }
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
            method: 'GET',
            Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
        };
        let connected = false;
        let demoResponse;
        try {
            const response = await fetch(this.ftbDomain + "/codebook" + this.props.match.params.name, requestOptions);
            // Actual
            demoResponse = await response.json();
            if (response.status === 200) {
                connected = true;
            } else {
                connected = false;
            }
        } catch {
            connected = false;
        }
        if (!connected) {
            demoResponse = MockCodeBook
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
            warning: !connected,
            ruleRootVariable: demoResponse.dataset.ruleRootVariable
        }));

    }

    getFilterSelection(index) {
        let filterSelection = [];
        if (this.state.filter[this.state.codeBook.codebook[index].name] != null) {
            let filterName = this.state.codeBook.codebook[index].name;
            for (const code in this.state.filter[filterName]) {
                if (this.state.filter[filterName][code] === true) {
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
            if (this.state.codeBook.codebook[this.state.indexAddingDimOpt] != null && this.state.filter[this.state.codeBook.codebook[this.state.indexAddingDimOpt].name] != null) {
                filtersSelected = this.state.filter[this.state.codeBook.codebook[this.state.indexAddingDimOpt].name]
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
                <div className="wrapper"> rootRuleVariable must be selected: {this.state.ruleRootVariable}</div>
                <DatasetFilterOptionMenu
                    datasetName={this.props.match.params.name}
                    showDim={this.state.indexAddingDimOpt < 0}
                    dimensions={dimensions}
                    getFilterQuery={this.getFilterQuery}
                    canFilter={this.state.canFilter}
                />
                {dimOptSelector}
                <Footer/>
            </div>
        )
    }
}
