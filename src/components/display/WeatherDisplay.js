import React, { Fragment } from "react";

const WeatherDisplay = ({ weather }) => {
  if (weather.temp_max === undefined) {
    return null;
  } else {
    return (
      <Fragment>
        <div className="location-display mt-4">
          <h1 className=" lead" style={{ fontSize: "4rem" }}>
            {weather.name}, {weather.country}
          </h1>
          <hr className="w-75" />
        </div>

        <div className="container text-center">
          <div className="temperature-display " style={tempStyle}>
            <h1 className="lead mt-2" style={{ fontSize: "11rem" }}>
              {(weather.temp - 273.15).toFixed(0)}°
            </h1>

            <p className="bold" style={{ fontSize: "1.5rem" }}>
              {(weather.temp_min - 273.15).toFixed(0)}° /{" "}
              {(weather.temp_max - 273.15).toFixed(0)}° Feels like{" "}
              {(weather.feels_like - 273.15).toFixed(0)}°
            </p>
            <h2 className="lead" style={{ fontSize: "5rem" }}>
              {weather.description}
            </h2>
          </div>
        </div>
      </Fragment>
    );
  }
};

const tempStyle = {
  marginTop: "100px",
};

export default WeatherDisplay;
