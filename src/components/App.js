import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home.js'
import Forecast from './Forecast.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/forecast' component={Forecast} />
          <Route render={() => {
            return <p>Not Found</p>
          }} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
