import React from "react";

export default class GreetingWithProps extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Hi, I am {this.props.name}</h1>
      </div>
    );
  }
}
