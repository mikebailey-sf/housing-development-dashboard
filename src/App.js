import React, { Component } from 'react';
import FactorBar from './Components/FactorBar';
//import Header from './Components/Header';
import NavB from './Components/Nav';
import Results from './Components/Results';
import './App.css';

//Reference App:
//http://ternercenter2.berkeley.edu/examplecities/index.html?city=San%20Francisco

class App extends Component {
  
  constructor(e){
    super();
    this.state = {
      placeholder: null
    }
  }

  async componentDidMount() {
    //Get Initial Data
  }

  async componentDidUpdate(){
    //New data, update state
  }

  selectFactor = (e) => {
    //factor selected
  }

  render() {
    return (
    <div className="App">
      <NavB />
      <div className='container'>
        <div className='row'>
          <FactorBar />
          <Results />
        </div>
      </div>  
    </div>
    );
  }
}

export default App;
