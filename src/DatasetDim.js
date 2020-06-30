import React from 'react';
import './App.css';


export class DatasetDim extends React.Component {

    render() {
        let filterSelection = "Nothing added";
        if (this.props.filterSelection != null && this.props.filterSelection.length > 0) {
            filterSelection = this.props.filterSelection.join(", ");

        }
        return <li id="filter-option"
                   className="white-background margin-left-md--2 margin-right-md--2 margin-right-sm--1 margin-left-sm--1 filter-overview__add">
            <div className="col--lg-56 min-height--10 padding-left-sm--0 padding-left-md--1">
                <div className="col col--md-8 col--lg-8 min-height--4">
                    <a className="filter-overview__link--add"
                       href="#" onClick={() => {
                        this.props.dimClicked(true)
                    }}><span
                        className="dimension-button btn btn--tertiary margin-left-md--2 margin-left-sm--1  font-weight-700 ">Add <span
                        className="visuallyhidden">{this.props.label}</span></span></a>
                </div>
                <div
                    className="dimension-name col col--md-11 col--lg-14 margin-left-sm--6 height-sm--3 height-md--6 overflow--hidden margin-top-md--3 margin-bottom-sm--2">
                    <strong><span id="filter-option-label"
                                  className="font-size-16">{this.props.label}</span></strong></div>
                <div id="number-added-aggregate" className="col col--md-20 col--lg-30">
                    <div
                        className="font-size--16 height-sm--3 height-md--10 nowrap-sm vertical-align-middle margin-left-sm--4 list--ellipses-sm overflow--hidden">
                        <div
                            className="height-sm--3 max-height-md--9 vertical-align-middle__contents--md list--ellipses-md">
                            <ul className="list list--pipe-seperated list--pipe-seperated-ellipses">
                                <span>{filterSelection}</span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>;
    }
}
