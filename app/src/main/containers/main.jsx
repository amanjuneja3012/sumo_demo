import React, { Component } from 'react';  
import { combineReducers } from 'redux';  
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { compose , createStore , applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import { connect } from 'react-redux';
import Wrapper from '../components/wrapper';

const reducer = combineReducers(reducers);
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default class MainContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper update-data={MainContainer.update_data}/>
      </Provider>
    );
  }
}

function run() {
  ReactDOM.render(<MainContainer />, document.getElementById('main'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];
if ((loadedStates.indexOf(document.readyState)!=-1) && document.body) {
  run();
}else {
  window.addEventListener('DOMContentLoaded', run, false);
}


