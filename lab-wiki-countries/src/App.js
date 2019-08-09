import React, {Component} from 'react';
import './App.css';
import MyApp from './myApp';
import MainContainer from './mainContainer';
import axios from 'axios';

class App extends Component {

constructor(){
  super()
  this.state = {
    countries: []
    }
}

componentDidMount() {
  axios.get("https://countries.tech-savvy.tech/countries")
  .then(response => {
      this.setState({countries: response.data})
  })
}

  
  render() {
    debugger
    return (
      <div className="left-column">
        <div className="nav">
          <h1>WikiCountries</h1>
        </div>
        <div>
          <MyApp countries={this.state.countries}/>
        </div>
        <div>
          <MainContainer countries={this.state.countries}/>
        </div>
      </div>
    )
  }
}

export default App;
