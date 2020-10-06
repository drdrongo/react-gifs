import React, { Component } from 'react';
import { Gif } from './gif'

export class GifList extends Component {
  renderList() {
    return this.props.gifs.map(({id}) => {
      return <Gif handleClick={this.props.handleClick} id={id} key={id} className="gif" />
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