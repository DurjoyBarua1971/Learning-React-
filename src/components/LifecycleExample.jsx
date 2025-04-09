import React from "react";

export default class LifecycleExample extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    console.log("Component mounted");
    this.timer = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Component unmounted");
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>Current Time: {this.state.time}</h1>
      </div>
    );
  }
}
