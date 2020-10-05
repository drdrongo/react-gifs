import React, { Component } from 'react';
import { SearchBar } from './search_bar';
import { Gif } from './gif';
import { GifList } from './gif_list';

var giphy = require('giphy-api');

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        { id: "LxSFsOTa3ytEY" },
        { id: "U2nN0ridM4lXy" }
      ],
      selectedGifId: "LxSFsOTa3ytEY"
    };
    this.search = this.search.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  search = (query) => {
    giphy('EZDlbnKWY9Gu812S11xfdHt0cxETUcUn').search({
      q: query,
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  handleClick = (event) => {
    this.setState({
      selectedGifId: event.target.id
    })
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList handleClick={this.handleClick} gifs={this.state.gifs} />
        </div>
      </div>
    )
  }
}

    