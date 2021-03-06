import React from "react";
import { Paper, TextField } from "@material-ui/core";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search..."
            onChange={this.handleChange}
            value={this.state.searchTerm}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
