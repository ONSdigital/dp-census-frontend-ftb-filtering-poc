import React from 'react';
import './App.css';

export class DatasetFilterOptionMenu extends React.Component {


    constructor(props) {
        super(props);
        this.applyFilters = this.applyFilters.bind(this);
    }

    applyFilters() {
        let navTo = `${document.location.origin}/dp-census-frontend-ftb-filtering-poc/results/${this.props.datasetName}?`;
        navTo += this.props.getFilterQuery();
        window.location.href = navTo;
    }

    render() {
        if (!this.props.showDim) {
            return null;
        }
        let previewDownloadClass = "btn btn--primary btn--primary-disabled btn--thick btn--wide btn--big btn--focus margin-right--2 font-weight-700 font-size--17";
        if (this.props.canFilter) {
            previewDownloadClass = "btn btn--primary btn--thick btn--wide btn--big btn--focus margin-right--2 font-weight-700 font-size--17";
        }
        return (
            <div className="wrapper adjust-font-size--16 page-content link-adjust background--gallery">
                <ul className="list--neutral filter-overview">
                    <li className="margin-left--0 padding-bottom--2 padding-top--0 padding-right--2 width-lg--56">
                        <button className="float-el--right-md float-el--right-sm float-el--right-lg"
                                href="/filters/c53f1a7c-ecf1-4abf-a104-f8f00cd57994/dimensions/clear-all"
                        onClick={() => {this.props.clearAll()}}
                        >
                            Clear filters
                        </button>
                    </li>
                    {this.props.dimensions}
                </ul>
                <div className="btn--no-click padding-bottom--4 padding-left--2 padding-top--2">
                    <div className="filter-overview__error-container" id="error-container"></div>
                    <form method="post" action="/filters/c53f1a7c-ecf1-4abf-a104-f8f00cd57994/submit">
                        <input id="preview-download" type="button" value="Apply filters"
                               className={previewDownloadClass}
                               name="preview-and-download"
                               onClick={this.applyFilters}
                        />
                    </form>
                </div>
            </div>)
    }
}

