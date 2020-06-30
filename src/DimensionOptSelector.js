import React from 'react';
import './App.css';

export class DimensionOptSelector extends React.Component {
    dimCodeBook;
    showDim;

    constructor(props) {
        super(props);
        // this.checkChanged = this.checkChanged.bind(this);
        this.saveSelection = this.saveSelection.bind(this);
        this.state = {
            filters: this.props.filters

        };
    }

    checkChanged(code, e) {
        code = code.toString();
        let filters = this.state.filters;
        filters[code] = e.target.checked;
        this.setState({
            filters: filters
        },()=>{
            //debug function
        });

    }

    saveSelection() {
        this.props.filterUpdate(this.props.dimCodeBook.name, this.state.filters);
        this.props.closeDimensionOptMenu();
    }

    render() {
        if (!this.props.showDim) {
            return null;
        }
        let dimensions = [];
        for (let i = 0; i < this.props.dimCodeBook.labels.length; i++) {
            dimensions.push(<div
                className="checkbox hierarchy-box border-bottom--gallery-sm border-bottom--gallery-md margin-bottom--1 clearfix">
                <div className="width-md--25 float-el--left-md">
                    <input type="checkbox" className="checkbox__input js-filter" id={"id" + i}
                           name={this.props.dimCodeBook.codes[i]}
                           onChange={(e) => {
                               this.checkChanged(this.props.dimCodeBook.codes[i], e)
                           }}
                           checked={this.state.filters[this.props.dimCodeBook.codes[i]]}
                    />
                    <label id={this.props.dimCodeBook.codes[i]} className="checkbox__label" htmlFor={"id" + i}>
                        {this.props.dimCodeBook.labels[i]}
                    </label>
                </div>
            </div>)
        }

        return <div className="wrapper">
            <div className="col col--md-50 col--lg-35">
                <fieldset>
                    <legend>
                        <h2 className="font-size--17 padding-bottom--1 font-weight-700">Browse <span
                            className="visuallyhidden">Aggregate</span></h2>
                    </legend>
                    <input name="save-and-return" className="hidden" type="submit" value="Save and return"/>
                    <input className="btn btn--link underline-link js-filter add-all" type="submit" value="Add all"
                           name="add-all" id="add-all"
                           aria-label="Add all Aggregate in this list to your saved items"/>&nbsp; &nbsp;
                    <input className="btn btn--link underline-link js-filter remove-list js-hidden" type="submit"
                           value="Remove all" name="remove-all" id="remove-all"
                           aria-label="Remove all Aggregate in this list from your saved items"/>
                    <input name="q" type="hidden" value="/" aria-controls="checkboxes-0"/>
                    {dimensions}
                </fieldset>
                <div className="margin-top js-hidden">
                    <input type="submit" value="Add selected filters"
                           className="btn btn--secondary btn--focus font-weight-700 font-size--17 text-wrap"/>
                </div>
                <div id="save-and-return-container" className="margin-top--5">
                    <input name="save-and-return"
                           className="btn btn--primary btn--thick btn--wide btn--big btn--focus margin-right--2 font-weight-700 font-size--17 text-wrap save-button-bottom"
                           type="button" value="Save and return" onClick={this.saveSelection}/>
                </div>
            </div>
        </div>
    }
}
