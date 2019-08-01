import React, { Component } from 'react';
import Factor from './Factor';

class FactorBar extends Component {
  render() {
    return (
      <div className='factor-bar col-5'>
        <Factor type='switch' name='Phase'/>
        <Factor type='buttons' name='Neighborhood Density'/>
        <Factor type='buttons' name='Historical Significance'/>
      </div>
    );
  }
}

export default FactorBar;