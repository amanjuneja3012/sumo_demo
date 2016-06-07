import * as types from '../actions/action_types/action_type.js';

const initialState = {
  data: null,
  hash_id: null
};

export default function main_reducer(state = initialState, action) {
  if(action && action.type){
    switch (action.type) {
      case types.FETCH_DATA_SUCCESS:
        return {
          ...state,
          data: Object.assign({}, action.data)        
        }
        break;
      default: 
        return state;
    }
  }
}  