import React, {Component} from 'react';
import active from './active';
import Item from '../../components/Item';

class List extends Component {
  render(){
    const {items} = this.props;
    const list = Object.keys(items).map((key) => {
      const {id, count} = items[key];
      return <Item key={id} id={id} count={count} />
    });

    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default active(List);
