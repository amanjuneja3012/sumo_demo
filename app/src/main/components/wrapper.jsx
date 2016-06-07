import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import MainContainer from './main_container';

export default class Wrapper extends Component {
  render() {
    return (
      <div className="">
        <MainContainer/>
      </div>
    );
  }
}