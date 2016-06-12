import {connect} from 'react-redux';

const mapStateToProps = ({title}) => ({title});

const mapDispatchToProps = (dispatch) => ({
	setTitle: (title) => dispatch({type: 'SET', title}),
});

export default connect(mapStateToProps, mapDispatchToProps);
