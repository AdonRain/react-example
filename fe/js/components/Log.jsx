import React, {Component, PropTypes} from 'react';

class Log extends Component {
	render(){
		return <ul>{this.props.log.map((txt, n) => (<li key={n}>{txt}</li>))}</ul>;
	}
}

const {string, arrayOf} = PropTypes;

Log.propTypes = {
	log: arrayOf(string).isRequired
};

export default Log;
