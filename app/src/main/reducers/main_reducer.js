import * as types from '../actions/action_types/action_type.js';

const initialState = {
  modal_state: 0,
  send_email: false,
  results:[],
  autocomplete_type:'team'
};

export default function main_reducer(state = initialState, action) {
  if(action && action.type){
    switch (action.type) {
      case types.OPEN_MODAL:
        return {
          ...state,
          modal_state: 1
        }
      case types.CLOSE_MODAL:
        return{
          ...state,
          modal_state: 0
        }
      case types.UPDATE_RESULTS:
        debugger
        return{
          ...state,
          results:action.data,
          autocomplete_type:action.autocomplete_type
        }
        break;
      default:
        return state;
    }
  }
}