import React, {Component, PropTypes} from 'react';
import Log from '../../components/Log';
import Battlers from '../../components/Battlers';
import connect from './connect';

class Home extends Component {
	render(){
		const {battle: {doing, log, standing}, duck} = this.props;
		return (
			<div>
				<Battlers doing={doing} duck={duck} />
				<Log log={log}/>
			</div>
		);
	}
}

const {object, string, func, shape, arrayOf} = PropTypes;

Home.propTypes = {
	battle: shape({
		doing: object.isRequired,
		log: arrayOf(PropTypes.string)
	}).isRequired,
	duck: func.isRequired,
}

export default connect(Home);
