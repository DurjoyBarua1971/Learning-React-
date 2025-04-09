import React from "react";

export default class LifecycleExample extends React.Component {
  state = {
    timers: new Date(),
  };

  componentDidMount() {
    console.log("Component mounted");
    this.timer = setInterval(() => {
      this.setState({ timers: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Component unmounted");
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1 className="text-2xl font-bold text-center">Hand Watch </h1>
        <h1>
          Current Time:{" "}
          {this.state.timers.toLocaleTimeString(this.props.locale)}
        </h1>
      </div>
    );
  }
}
