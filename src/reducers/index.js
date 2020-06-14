import {GET_ALL_SHOOTINGS} from '../constants/action-types.js';

const stateinit = {
	data = [];
}

function rootReducer (state = stateinit, action){
	if (action.type === GET_ALL_SHOOTINGS){
		const url =
	      'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/data-dashboard-ipfkx/service/Shootings/incoming_webhook/getAllShootings';
	    const tempObj = {...state};	     
	}
	return state;
}