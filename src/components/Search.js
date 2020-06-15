import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    text: "",
  };

  searchWeather = (e) => {
    e.preventDefault();

    this.props.getWeather(this.state.text);
    this.setState({ text: "" });
  };

  updateSearch = (e) => {
    const text = e.target.value;

    this.setState({ text });
  };

  render() {
    const style = {
      background: "rgb(228, 250, 252)",
    };

    return (
      <div className="container ">
        <div className="row text-center">
          <div className="col mx-auto">
            <form onSubmit={this.searchWeather}>
              <input
                type="text"
                style={style}
                placeholder="Search by city..."
                className="form-control w-75 mx-auto "
                value={this.state.text}
                onChange={this.updateSearch}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
