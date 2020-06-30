import React from 'react';
import './App.css';
import {Dataset} from "./Dataset";
import {DatasetList} from "./DatasetList";
import {Results} from "./Results";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/dp-census-frontend-ftb-filtering-poc/dataset/:name" component={Dataset}/>
                    <Route path="/dp-census-frontend-ftb-filtering-poc/results/:dataset" component={Results}/>
                    <Route path="/dp-census-frontend-ftb-filtering-poc/" component={DatasetList} exact/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
