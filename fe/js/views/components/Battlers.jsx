import React, {Component, PropTypes} from 'react';
import Battler from './Battler';

class Battlers extends Component {
	render(){
		const {doing, duck} = this.props;
		const boxes = Object.keys(doing).map((name) => {
			return <Battler key={name} name={name} doing={doing} duck={duck.bind(this, name)} />;
		});

		return <div className="battlers">{boxes}</div>;
	}
}

const {object, func} = PropTypes;

Battlers.propTypes = {
	duck: func.isRequired,
	doing: object.isRequired
};

export default Battlers;
