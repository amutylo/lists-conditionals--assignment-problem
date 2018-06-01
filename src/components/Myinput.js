import React, { Component } from 'react';

export default class Myinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordlength: 0
    }
  }
  
  countWords(text) {
      this.setState(
        {wordlength: text.length}
      )
  } 

  render() {
    return (
      <div>
        <input name="myinput" type="text" onChange={(e) => { this.countWords(e.target.value) }} />
        <p>The length of the word entered is: { this.state.wordlength } chars</p>
      </div>
    );
  }
}
