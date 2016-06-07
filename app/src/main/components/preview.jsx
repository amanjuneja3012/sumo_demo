import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/main_actions';
import moment from 'moment';
import TimelineCard from '../styles/preview.less';
 
export default class ShortPreviewComponent extends React.Component {
  render() {
    if (this.props.data) {
      console.log(this.props.data);
      let img_styles={"backgroundImage": 'url(' + this.props.data.image_url + ')'}
      console.log(moment);
      let moment = new Date(this.props.data.created_at);
      return (
        <div className="preview_card card">
          <div className="img_container">
            <div className="img_styles" style={img_styles}></div>
          </div>
          <div className="text_wrap">
            <div className="title">
              {this.props.data.title}
            </div>
            <p>
              {this.props.data.content}
            </p>
            <div className="info">
              <span className="blk">Short </span>
              by
              <span className="shortener"> {this.props.publisher} </span>
              /
              <span> {moment.getDate()}</span>
            </div>
          </div>
          <div className="footer">
            <div className="link">
            <span>more at</span>
            <span className='f12 source_name'>{this.props.data.source_name}</span>
            </div>
          </div>
        </div>
      )
    }else {
      return (
        <div></div>
      )
    }  
  }
}