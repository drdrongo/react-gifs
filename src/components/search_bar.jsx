import React, { Component } from 'react';


export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  handleUpdate = (event) => {
    const searchTerm = event.target.value;
    this.setState({ term: searchTerm });
    this.props.searchFunction(searchTerm);
  }

  render() {
    return(
      <input type="text" value={this.state.term} className="form-control form-search" onChange={this.handleUpdate}/>
    )
  }
}