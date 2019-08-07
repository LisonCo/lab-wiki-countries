import React, {Component} from 'react';
import './App.css';
import MyApp from './myApp';
import MainContainer from './mainContainer';

class App extends Component {
  render() {
    return (
      <div class="left-column">
        <div className="nav">
          <h1>WikiCountries</h1>
        </div>
        <div>
          <MyApp/>
        </div>
        <div>
          <MainContainer/>
        </div>
      </div>
    )
  }
}

export default App;
