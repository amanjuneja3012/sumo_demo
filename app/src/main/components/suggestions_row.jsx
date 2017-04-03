import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/main_actions';

class SuggestionsRow extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="suggestion_row">
        {this.props.data}
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
)(SuggestionsRow)
