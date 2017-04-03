import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/main_actions';
import CustomAutocompleteWidget from './custom_auto_complete_widget';

class EmployeeSelectionDialog extends Component {
  render() {
    return (
      <div className="send_email_dialog_box abs_center">
        <div className="heading">Select an Employee</div>
        <div className="send_email">
          <input type='checkbox' id="send_email" className="send_email_checkbox" checked={this.props.send_email}/>
          <label htmlFor="send_email">Send welcome email to employee</label>
        </div>
        <CustomAutocompleteWidget type="team" title="Select a team in the organization"/>
        <CustomAutocompleteWidget type="employees" title="Select an Employee"/>
        <div className="btn_container">
          <button className="btn secondary mr10" onClick={()=>this.props.close_modal()}>Cancel</button>
          <button className="btn primary" onClick={()=>this.props.close_modal()}>OK</button>
        </div>
        <div className="close_modal" onClick={()=>this.props.close_modal()}>X</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.main_reducer.modal_state,
    send_email: state.main_reducer.send_email
  }
}

export default connect(
  mapStateToProps,
  actions
)(EmployeeSelectionDialog)
