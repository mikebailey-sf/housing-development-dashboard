import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import Switch from './Switch';

class Factor extends Component {
  constructor(e){
    super();
    this.state = {
      placeholder: null,
      value: false,
      setValue: false
    }
  }

  render() {
    return (
      <div className='factor-div'>
        <h5>{this.props.name}</h5>

        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
        </ButtonGroup>        
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>Yes</Button>
          <Button>No</Button>
        </ButtonGroup>        
      </div>
    );
  }
}

export default Factor;