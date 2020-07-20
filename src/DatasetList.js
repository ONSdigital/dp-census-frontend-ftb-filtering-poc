import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Content} from "./Content";
import {Footer} from "./Footer";


export class DatasetList extends React.Component {

    render() {
        return <div className="page-container">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    }
}
