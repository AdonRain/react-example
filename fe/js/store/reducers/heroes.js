var constants = require("../../constants");

import initialState from '../initialstate';

const reducer = (state, action) => {
	var newstate = Object.assign({},state);
	switch(action.type){
		case constants.KILL_HERO:
			newstate[action.killer].kills += 1;
			return newstate;
		default: return state || initialState.heroes;
	}
};

export default reducer;
