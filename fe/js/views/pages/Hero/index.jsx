import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from "react-redux";

class Hero extends Component {
	render(){
		const {params: {name}, heroes} = this.props;
		const {quote, kills} = heroes[name];
		return (
			<div>
				<p><Link to="/">Back to arena</Link></p>
				<p>Here's some info on {name}:</p>
				<p><strong>Quote:</strong> {quote} </p>
				<p><strong>Kills:</strong> {kills} </p>
			</div>
		);
	}
}

const {object, string, shape} = PropTypes;

Hero.propTypes = {
	params: shape({name: string.isRequired}).isRequired, // will be provided by react-router
	heroes: object.isRequired // will be provided by react-redux
};

const mapStateToProps = ({heroes}) => ({heroes});

export default connect(mapStateToProps)(Hero);
