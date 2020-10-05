import React, { Component } from 'react';
import { Gif } from './gif'

export class GifList extends Component {
  renderList() {
    return this.props.gifs.map(gif => {
      return <Gif handleClick={this.props.handleClick} id={gif.id} key={gif.id} className="gif" />
    })
  }
  
  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }
}