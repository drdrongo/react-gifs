import React, { Component } from 'react';


export class SearchBar extends Component {
  handleUpdate = (event) => {
    const searchTerm = event.target.value;
    this.props.searchFunction(searchTerm);
  }

  render() {
    return(
      <input type="text" className="form-control form-search" onChange={this.handleUpdate}/>
    )
  }
}