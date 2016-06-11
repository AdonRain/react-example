import React, {Component} from 'react';

export default class Container extends Component {
  render(){
    return (
      <div>
        <h1>List</h1>
        {this.props.children}
      </div>
    )
  }
}
