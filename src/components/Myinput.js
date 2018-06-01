import React, { Component } from 'react';

export default class Myinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordlenth: 0
    }
  }
  
  render() {
    return (
      <div>
        <input name="myinput" type="text" />
        <p>The length of the word entered is: { this.state.wordlenth } chars</p>
      </div>
    );
  }
}
