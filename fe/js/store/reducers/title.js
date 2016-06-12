import initialState from '../initialstate';

const reducer = (state, action) => {
	const newState = Object.assign({}, state);
	const {type, title} = action;
	switch(type){
		case 'SET':
			newState.title = title;
			return newState;
		default: return state || initialState.title;
	}
};

export default reducer;
