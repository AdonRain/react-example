var C = require("../../constants");

import initialState from '../initialstate';

const reducer = function(state, action){
	var newstate = Object.assign({},state);
	switch(action.type){
		case C.DUCK_DOWN:
			newstate.doing[action.coward] = C.DUCKING;
			newstate.log.push(action.coward+" ducks down like a coward.");
			return newstate;
		case C.STAND_UP:
			newstate.doing[action.coward] = C.WAITING;
			newstate.log.push(action.coward+" stands back up.");
			return newstate;
		default: return state || initialState.battlefield;
	}
};

export default reducer;
