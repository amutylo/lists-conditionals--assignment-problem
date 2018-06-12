import React, { Component } from 'react';

export default class ValidationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textLength: 5,
      mess: [ 'Text too short','Text long enough']
    };
    this.validate = this.validate.bind(this)
  }

  validate(text) {
    if (text && text.length) {
      let textArray = text.split('');
      if (textArray && textArray.length < 5){
        return this.state.mess[0];
      }
      return this.state.mess[1];
    }
  }

  render () {
    let message = this.validate(this.props.text);
    return (
      <div>{message}</div>
    );
  }
}