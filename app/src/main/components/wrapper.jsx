import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import MainContainer from './main_container';
import Modal from './modal';
import EmployeeSelectionDialog from './employee_selection_dialog';

export default class Wrapper extends Component {
  render() {
    return (
      <div className="">
        <MainContainer/>
        <Modal>
        	<EmployeeSelectionDialog />
        </Modal>
      </div>
    );
  }
}