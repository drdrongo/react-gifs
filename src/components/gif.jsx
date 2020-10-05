import React, { Component } from 'react';

export class Gif extends Component {  
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;
    return(
      <img src={src} alt="" id={this.props.id} onClick={this.props.handleClick} className="gif"/>
    )
  }
}