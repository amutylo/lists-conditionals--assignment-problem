import React, { Component } from 'react';

export default class CharComponent extends Component{

  constructor(props){
    super(props);
  }

  render (){
    let style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
    };

    return (
      <p style={style}>{this.prop.char}</p>
    );
  }
}