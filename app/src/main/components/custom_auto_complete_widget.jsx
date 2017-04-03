import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/main_actions';
import SuggestionRow from './suggestions_row';

class CustomAutoCompleteWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {autocomplete_status:'not_active'};
    this.activate_autocomplete = this.activate_autocomplete.bind(this);
  }
  render() {
      var suggestions = [];
      if((this.props.autocomplete_type=='team') && this.props.results){
        this.props.results.map( (el,k) => {
          suggestions.push(<div key={k} className="suggestion_row">{el}</div>)
        })
      }
      else if(this.props.autocomplete_type=='employees' && this.props.results){
        this.props.results.map( (el,k) => {
          el.map((data,k1)=>{
            suggestions.push(<div key={k+'employees'+k1} className="suggestion_row">{data}</div>)
          })
        })
      }
    return (
      <div className="custom_autocomplete_widget">
        <div className="header">{this.props.title}</div>
        <div className="autocomplete">
          <div className="input_stub" onClick={this.activate_autocomplete} style={(this.state.autocomplete_status!='active')?{display:'block'}:{'display':'none'}}>
            <div className="default_option">{`Select ${this.props.type} ...`}</div>
            <div className="arrow_down">^</div>
          </div>
          <input style={(this.state.autocomplete_status=='active')?{display:'block'}:{'display':'none'}} data-type={this.props.type} type="text" onChange={(e)=>this.props.runSearch(e,this.props.type)}/>
        </div>
        <div className="suggestions_layer" style={(this.state.autocomplete_status=='active' && this.props.autocomplete_type==this.props.type)?{display:'block'}:{'display':'none'}}>
          {suggestions}
        </div>
      </div>
    );
  }
  activate_autocomplete(){
    this.setState({autocomplete_status : 'active'});
  }
}

function mapStateToProps(state) {
  return {
    data: state.main_reducer.modal_state,
    send_email: state.main_reducer.send_email,
    autocomplete_type: state.main_reducer.autocomplete_type,
    results: state.main_reducer.results
  }
}

export default connect(
  mapStateToProps,
  actions
)(CustomAutoCompleteWidget)
