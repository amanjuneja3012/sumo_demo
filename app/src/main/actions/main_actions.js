import * as types from '../actions/action_types/action_type.js';
let fetch = require('node-fetch');
import {processAndTriggerSearch} from '../helpers/auto_complete_helper.js';

export function openModal() {
  return{
    type:types.OPEN_MODAL
  }
}

export function close_modal() {
  return{
    type:types.CLOSE_MODAL
  }
}

export function runSearch(event,type,selected_team){
  debugger
  var string = event.target.value;
  var result = processAndTriggerSearch(string,type,selected_team);
  return{
    type:types.UPDATE_RESULTS,
    data:(type=='team')?result.map((el)=>{return el[type]}):result,
    autocomplete_type:type
  }
}

export function filter_data(suggestion){
  return{
    type:types.FILTER_DATA,
    suggestion:suggestion
  }
}