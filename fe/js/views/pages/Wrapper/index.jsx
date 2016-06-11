import React, {Component} from 'react';

export default class Wrapper extends Component {
  render(){
    return (
        <div className="wrapper">
            <h2>Superhero battle arena 2000!</h2>
            {this.props.children}
        </div>
    );
  }
}
