import {connect} from 'react-redux';

const constants = require("../../../constants");

const mapStateToProps = ({battlefield}) => ({battle: battlefield});

const mapDispatchToProps = function (dispatch){
	return {
		duck: function (coward){
			dispatch({type: constants.DUCK_DOWN, coward: coward});
			setTimeout(function(){
				dispatch({type: constants.STAND_UP, coward: coward});
			},1000);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps);
