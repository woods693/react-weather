import { FETCH_WEATHER } from '../actions/index.js'

export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.response.data]);
      return [ action.payload.data, ...state ];
  }
  //console.log('Action Received', action);
  return state;
}
