import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import Forecast from './Forecast.js';
import Detail from './Detail.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/forecast' component={Forecast} />
          <Route path='/detail' component={Detail} />
          <Route render={() => {
            return <p>Not Found</p>
          }} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
