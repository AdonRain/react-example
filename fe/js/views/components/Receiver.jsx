import React, {Component} from 'react';

export default class Driver extends Component {
  render(){
    const {count} = this.props;
    return (
      <p>count: {count}</p>
    );
  }
}
