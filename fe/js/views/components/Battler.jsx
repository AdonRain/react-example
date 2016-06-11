import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {WAITING, DUCKING} from '../../constants';

class Battler extends Component {
	render(){
		const {name, doing, duck} = this.props;
		const	controls = {
			[WAITING]: <button key="duck" onClick={duck}>duck</button>,
			[DUCKING]: "ducking",
		}[doing[name]];

		return <div className="battler">
			<Link to={"/hero/"+name}>{name}</Link>
			<div>{controls}</div>
		</div>;
	}
}

const {string, func} = PropTypes;

Battler.propTypes = {
	name: string.isRequired,
	duck: func.isRequired
}

export default Battler;
