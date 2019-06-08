import React, { Component } from "react";
import { TextField, Button } from "react-md";
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  handleChangeInput = term => {
    this.setState({
      term
    });
    const { onSearchTermChange } = this.props;
    onSearchTermChange(term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="searchHeader">
        <TextField
          id="1"
          placeholder="search video"
          className="md-cell inputText"
          value={term}
          onChange={event => this.handleChangeInput(event)}
        />
      </div>
    );
  }
}
