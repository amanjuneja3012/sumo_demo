import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/main_actions';

class Modal extends Component {
  render() {
    return (
      <div className={`modal ${(this.props.data)?'active':'not_active'}`}>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.main_reducer.modal_state
  }
}

export default connect(
  mapStateToProps,
  actions
)(Modal)
