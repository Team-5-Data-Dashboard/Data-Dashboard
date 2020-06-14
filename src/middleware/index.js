import {GET_ALL_SHOOTINGS} from '../constants/action-types.js'

export function data_load({dispatch},year){
  return function(next){
    return function(action){
      if (action.type === GET_ALL_SHOOTINGS){
        const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/data-dashboard-ipfkx/service/Shootings/incoming_webhook/getAllByYear?year=' +year;
        console.log('Testing');
        fetch(url)
          .then((res) => res.json())
          .then((data) => dispatch(
            {
              type:GET_ALL_SHOOTINGS,
              payload:data
            }
          ))
          .catch((err) => console.error('Error: ', err))
      }
      return next(action);
    }
  }
}