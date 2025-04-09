import React from "react";
import Button from "./Button";

export default class Clock extends React.Component {
  state = {
    time: new Date(),
    locale: "en-US",
  };

  changeLocale = () => {
    this.setState((prevState) => ({
      locale: prevState.locale === "en-US" ? "bn-BD" : "en-US",
    }));
  };

  getButtonLabel = () => {
    const labels = {
      "en-US": "বাংলাতে দেখুন",
      "bn-BD": "In English",
    };

    return labels[this.state.locale] || "Toogle Locale";
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="justify-center flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md w-[300px]">
        <h1 className="text-2xl font-bold text-center">Hand Watch </h1>
        <h1>
          Current Time:{" "}
          {this.state.time.toLocaleTimeString(this.state.locale)}
        </h1>
        <Button change={this.changeLocale} label={this.getButtonLabel()} />
      </div>
    );
  }
}
