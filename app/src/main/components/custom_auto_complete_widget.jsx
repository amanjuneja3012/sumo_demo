import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/main_actions';
import SuggestionRow from './suggestions_row';

class CustomAutoCompleteWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'employee_autocomplete_status':'not_active',
      'team_autocomplete_status':'not_active',
      'selected_team':'',
      'selected_employee':''
    };
    this.activate_autocomplete = this.activate_autocomplete.bind(this);
  }
  render() {
    var suggestions = [];
    if((this.props.autocomplete_type=='team') && this.props.results){
      this.props.results.map( (el,k) => {
        suggestions.push(<div key={k} data-type = {this.props.autocomplete_type} className="suggestion_row" onClick={(e)=>this.sugggestion_selected(e,this.props.type)}>{el}</div>)
      })
    }
    else if(this.props.autocomplete_type == 'employees' && this.props.results){
      this.props.results.map( (el,k) => {
        el.map((data,k1)=>{
          suggestions.push(<div data-type = {this.props.autocomplete_type} key={k+'employees'+k1} className="suggestion_row" onClick={(e)=>this.sugggestion_selected(e,this.props.type)}>{data}</div>)
        })
      })
    }
    var selected_option = (this.props.type=='team')?this.state.selected_team:this.state.selected_employee;
    var autocomplete_status = (this.props.type=='team')?this.state.team_autocomplete_status:this.state.employee_autocomplete_status;
    return (
      <div className="custom_autocomplete_widget">
        <div className="header">{this.props.title}</div>
        <div className="autocomplete">
          <div className="input_stub" onClick={(e)=>this.activate_autocomplete(this.props.type)} style={( (autocomplete_status=='filled' || autocomplete_status!='active'))?{display:'block'}:{'display':'none'}}>
            <div className="default_option">{(!selected_option.length)?`Select ${this.props.type} ...`:selected_option}</div>
            <div className="arrow_down">^</div>
          </div>
          <input id={this.props.type} style={(autocomplete_status=='active')?{display:'block'}:{'display':'none'}} data-type={this.props.type} type="text" onChange={(e)=>this.props.runSearch(e,this.props.type,this.props.selected_team)}/>
        </div>
        <div className="suggestions_layer" style={(autocomplete_status=='active' && this.props.autocomplete_type==this.props.type)?{display:'block'}:{'display':'none'}}>
          {suggestions}
        </div>
      </div>
    );
  }
  activate_autocomplete(type){
    if(type == 'team'){
      this.setState({team_autocomplete_status : 'active'});
      this.props.runSearch({target:{value:""}},this.props.type,this.props.selected_team);
    }
    else if(type == 'employees'){
      this.setState({employee_autocomplete_status : 'active'});
    }
  }
  sugggestion_selected(e,type){
    debugger
    if(type == 'team'){
      var selected_team = e.target.innerHTML;
      this.props.filter_data(selected_team);
      this.setState({team_autocomplete_status : 'filled'});
      this.setState({selected_team : selected_team});
      this.setState({employee_autocomplete_status : 'not_active'});
      this.setState({selected_employee : ''});
    }
    else if(type == 'employees'){
      var selected_employee = e.target.innerHTML;
      this.setState({employee_autocomplete_status : 'filled'});
      this.setState({selected_employee : selected_employee});
    }
  }
}

function mapStateToProps(state) {
  return {
    data: state.main_reducer.modal_state,
    send_email: state.main_reducer.send_email,
    autocomplete_type: state.main_reducer.autocomplete_type,
    results: state.main_reducer.results,
    selected_team: state.main_reducer.selected_team
  }
}

export default connect(
  mapStateToProps,
  actions
)(CustomAutoCompleteWidget)
