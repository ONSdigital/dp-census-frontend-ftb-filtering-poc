import React from 'react';
import './App.css';

export class DatasetFilterOptionMenu extends React.Component {

    render() {
        return (
            <div className="wrapper adjust-font-size--16 page-content link-adjust background--gallery">
                <ul className="list--neutral filter-overview">
                    <li className="margin-left--0 padding-bottom--2 padding-top--0 padding-right--2 width-lg--56">
                        <a className="float-el--right-md float-el--right-sm float-el--right-lg"
                           href="/filters/c53f1a7c-ecf1-4abf-a104-f8f00cd57994/dimensions/clear-all">Clear
                            filters</a>
                    </li>
                    {this.props.dimensions}
                </ul>
                <div className="btn--no-click padding-bottom--4 padding-left--2 padding-top--2">
                    <div className="filter-overview__error-container" id="error-container"></div>
                    <form method="post" action="/filters/c53f1a7c-ecf1-4abf-a104-f8f00cd57994/submit">
                        <input id="preview-download" type="submit" value="Apply filters"
                               className="btn btn--primary btn--primary-disabled btn--thick btn--wide btn--big btn--focus margin-right--2 font-weight-700 font-size--17"
                               name="preview-and-download"/>
                    </form>
                </div>
            </div>)
    }
}

