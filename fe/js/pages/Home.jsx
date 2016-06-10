import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Log from '../components/Log';
import Battlers from '../components/Battlers';
import actions from '../store/actions';

class Home extends Component {
	render(){
		const {battle: {doing, log, standing}, kill, duck, reset} = this.props;
		return (
			<div>
				<Battlers doing={doing} kill={kill} duck={duck} />
				<Log log={log}/>
				{standing === 1 && <button onClick={reset}>Reset</button>}
			</div>
		);
	}
}

const {object, string, func, shape, arrayOf} = PropTypes;

Home.propTypes = {
	// redux store state, imported below
	battle: shape({
		doing: object.isRequired,
		log: arrayOf(PropTypes.string)
	}).isRequired,
	// redux action hookups, set up below
	kill: func.isRequired,
	duck: func.isRequired,
	reset: func.isRequired
}

const mapStateToProps = ({battlefield}) => ({battle: battlefield});

const mapDispatchToProps = (dispatch) => ({
	kill: (killer, victim) => dispatch(actions.aimAt(killer, victim)),
	duck: (coward) => dispatch(actions.duckDown(coward)),
	reset: () => dispatch(actions.reset())
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
