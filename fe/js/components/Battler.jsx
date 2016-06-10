import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {reduce} from 'lodash';
import {WAITING, DUCKING, DEAD, AIMING} from '../store/constants';

class Battler extends Component {
	render(){
		var p = this.props,
			name = p.name,
			doing = p.doing,
			// list all enemies that aren't dead yet
			killable = reduce(doing,function(list,status,opp){
				return status !== DEAD && opp!==name ? list.concat(opp) : list;
			},[]),
			// make buttons for all killable enemies
			buttons = killable.map(function(opp){
				return <button key={opp} onClick={p.kill.bind(this,opp)}>{"Kill "+opp}</button>;
			},this).concat(<button key="duck" onClick={p.duck}>duck</button>); // ...as well as a duck button
		//controls depend on what we're doing
		var controls = { // using ES6 syntax for dynamic object properties
			[WAITING]: buttons.length > 1 ? buttons : "Winner!!",
			[DUCKING]: "ducking",
			[DEAD]: "...dead...",
			[AIMING]: "aiming!"
		}[p.doing[name]];
		return <div className="battler">
			<Link to={"/hero/"+name}>{name}</Link>
			<div>{controls}</div>
		</div>;
	}
}

const {string, func} = PropTypes;

Battler.propTypes = {
	name: string.isRequired,
	kill: func.isRequired,
	duck: func.isRequired
}

export default Battler;
