import React, {Component} from 'react';

export default class Driver extends Component {
  render(){
    const {add, sub} = this.props;
    return (
      <div>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
      </div>
    );
  }
}
