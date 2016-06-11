import initialState from '../initialstate';

const reducer = (state, action) => {
	const newState = Object.assign({}, state);
	const {type, id, step} = action;
	switch(type){
		case 'ADD':
			newState[id-1].count += step;
			return newState;
		case 'SUB':
			newState[id-1].count -= step;
			return newState;
		default: return state || initialState.list;
	}
};

export default reducer;
