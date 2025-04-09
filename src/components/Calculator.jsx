import React from "react";
import { convert, toCelsius, toFahrenheit } from "../helper/converter";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleChange = (temperature, scale) => {
    this.setState({ temperature, scale });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-amber-300 text-gray-800">
        <h1 className="text-2xl font-bold mb-4">Temperature Converter</h1>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  } 
}
