import {connect} from 'react-redux';

const mapStateToProps = ({list}) => ({items: list});

const mapDispatchToProps = (dispatch) => ({
	add: (id, num) => dispatch({type: 'ADD', id:id, step: num}),
  sub: (id, num) => dispatch({type: 'SUB', id:id, step: num}),
});

export default connect(mapStateToProps, mapDispatchToProps);
