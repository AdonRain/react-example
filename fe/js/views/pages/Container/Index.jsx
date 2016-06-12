import React, {Component} from 'react';
import active from './active';

class Container extends Component {
  render(){
    const {title} = this.props;

    return (
      <div>
        <h1>{title}</h1>
        {this.props.children}
      </div>
    )
  }
}

export default active(Container);
