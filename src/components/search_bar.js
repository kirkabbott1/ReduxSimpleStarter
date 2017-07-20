import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    return (
      <div className="search-bar">
        <i className="fa fa-search"></i>
        <input
          placeholder='   Search Youtube Videos'
          value={this.state.term}
          onChange={event => this.onInputchange(event.target.value)} />
      </div>
    );
  }

  onInputchange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
