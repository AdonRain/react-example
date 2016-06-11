import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import Driver from '../../components/Driver';
import Receiver from '../../components/Receiver';
import active from './active';

class Detail extends Component {
  render(){
    const {params:{id}, items, add, sub} = this.props;
    const {count} =items[id-1];

    return (
      <div>
        <IndexLink to={'/'}>Back to List</IndexLink>
        <h2>detail-{id}</h2>
        <Receiver count={count} />
        <Driver add={add.bind(this, id, 2)} sub={sub.bind(this, id, 1)} />
      </div>
    );
  }
}

export default active(Detail);
