import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import WeatherDisplay from "./components/display/WeatherDisplay";

class App extends Component {
  state = {
    weather: {},
  };

  getWeather = async (text) => {
    console.log(`fetching weather for ${text}`);

    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=d0b1ac28ba93888714318fd7def6de48`
    );

    const weather = {
      ...res.data.main,
      ...res.data.weather[0],
      ...res.data.sys,
      name: res.data.name,
    };

    this.setState({ weather: weather });

    console.log(this.state.weather);
    console.log(res.data);
  };

  render() {
    return (
      <div className="App">
        <Search getWeather={this.getWeather} />
        <WeatherDisplay weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
