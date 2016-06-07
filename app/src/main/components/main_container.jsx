import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ShortPreviewComponent from './preview';
import * as actions from '../actions/main_actions';

class MainContainer extends Component {
  render() {
    return (
      <div className="">
        <div className="input">
          <input type="text" ref='hash_id'/>
          <button onClick={() => this.props.fetchPosts('news', {hash_id: this.refs.hash_id.value})}>Submit</button>
        </div>
        <ShortPreviewComponent data={this.props.data}/>
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
