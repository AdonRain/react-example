import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Item extends Component {
  render(){
    const {id, count} = this.props;
    return <li><Link to={`/detail/${id}`}>list_{id}</Link>--count: {count}</li>;
  }
};
