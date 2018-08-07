import { FETCH_WEATHER } from '../actions/index.js'

//this is where redux promise shines. Middlewares have the ability to manipulate actions
//Redux looks at the payload property and stops the action if its a promise
//once the request finishes, then it will dispatch a new action with the same type
//unwraps the promise for us
export default function(state = [], action){
  //only handle FETCH_WEATHER type
  switch (action.type) {
    case FETCH_WEATHER:
      //puts the payload data into the array, this adds on
      //never want to manipulate our state
      return [ action.payload.data, ...state ];
  }
  //console.log('Action Received', action);
  return state;
}
