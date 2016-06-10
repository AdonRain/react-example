import React, {Component, PropTypes} from 'react';
import {map} from 'lodash';
import Battler from './Battler';

class Battlers extends Component {
	render(){
		var p = this.props, boxes = map(p.doing,function(doing,name){ // loop through all heroes
			var kill = p.kill.bind(this,name), // prefill the kill method so that killer is always `name`
				duck = p.duck.bind(this,name); // make sure battler can only duck himself
			return <Battler key={name} name={name} doing={p.doing} kill={kill} duck={duck} />;
		},this);
		return <div className="battlers">{boxes}</div>;
	}
}

const {object, func} = PropTypes;

Battlers.propTypes = {
	kill: func.isRequired,
	duck: func.isRequired,
	doing: object.isRequired
};

export default Battlers;
