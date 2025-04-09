import React from "react";

export default class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.change !== this.props.change ||
      nextProps.label !== this.props.label
    );
  }

  render() {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-[14px]"
        onClick={this.props.change}
      >
        {this.props.label}
      </button>
    );
  }
}
