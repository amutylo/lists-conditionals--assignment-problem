import React, { Component } from 'react';
import ValidationComponent from "./ValidationComponent";

export default class Myinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordlength: 0,
      text: ''
    }
  }
  
  countWords(text) {
      this.setState(
        {
          wordlength: text.length,
          text: text
        }
      )
  } 

  render() {
    return (
      <div>
        <input name="myinput" type="text" onChange={(e) => { this.countWords(e.target.value) }} />
        <p>The length of the word entered is: { this.state.wordlength } chars</p>
        <ValidationComponent text={this.state.text}/>
      </div>
    );
  }
}
