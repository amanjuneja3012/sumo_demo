import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/main_actions';
import styles from '../styles/main.less';

class MainContainer extends Component {
  render() {
    return (
      <div className="main_container">
        <div className='abs_center'>
          <div className="heading">SUMO LOGIC ASSIGNMENT DEMO</div>
          <div className="btn primary" onClick={()=>this.props.openModal()}>Start</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.main_reducer.data
  }
}

export default connect(
  mapStateToProps,
  actions
)(MainContainer)
