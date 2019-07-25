import React, { Component } from 'react';
import Factor from './Factor';

class FactorBar extends Component {
  render() {
    return (
      <div>
        <Factor name='Phase'/>
        <Factor name='Neighborhood Density'/>
        <Factor name='Historical Significance'/>
      </div>
    );
  }
}

export default FactorBar;