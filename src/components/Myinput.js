import React, { Component } from 'react';
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

export default class Myinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordlength: 0,
      text: '',
      chars: []
    }
  }
  
  countWords(text) {
      this.setState(
        {
          wordlength: text.length,
          text: text,
          chars: text.split('')
        }
      )
  } 

  render() {
    return (
      <div>
        <input name="myinput" type="text" onChange={(e) => { this.countWords(e.target.value) }} />
        <p>The length of the word entered is: { this.state.wordlength } chars</p>
        <ValidationComponent text={this.state.text}/>
        {this.state.chars.map(

        )}
        <CharComponent chars={this.state.chars}/>
      </div>
    );
  }
}
