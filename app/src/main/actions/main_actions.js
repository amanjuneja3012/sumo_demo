import * as types from '../actions/action_types/action_type.js';
let fetch = require('node-fetch');
let base_url = `${location.protocol}//${location.host}`;

export function fetchPosts(type, params) {
  return dispatch => {
    if (type == 'news') {
      let url = `${base_url}/ajax/news/?hash_id=${params.hash_id}`;
      $.ajax({
        method: 'GET',
        url: url,
        dataType: 'json',
        success: function(response) {
          dispatch(receivePosts(type, {data: response}))
        },
        error: function(response, status, error) {
          dispatch(receivePosts(type, {data: {}}))
        },
        complete: function(response, status) {
        }
      });
    }
  }    
} 

export function receivePosts(type, params) {
  switch (type) {
    case 'news':
      return {
        type: types.FETCH_DATA_SUCCESS,
        data: params.data
      }
  }
}