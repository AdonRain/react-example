import {connect} from 'react-redux';

const mapStateToProps = ({list}) => ({items: list});

export default connect(mapStateToProps);
