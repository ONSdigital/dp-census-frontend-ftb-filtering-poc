import React from 'react';
import './App.css';
import {Dataset} from "./Dataset";
import {DatasetList} from "./DatasetList";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    console.log("should route");
  return (
      <BrowserRouter>
          <div>
              <Switch>
                  <Route path="/dp-census-frontend-ftb-filtering-poc/dataset/:name" component={Dataset}/>
                  <Route path="/dp-census-frontend-ftb-filtering-poc/" component={DatasetList} exact/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
