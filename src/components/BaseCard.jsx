import React from "react";

export default class BaseCard extends React.Component {
  render() {
    const cardStyle = {
      border: "1px solid red",
      padding: "16px",
      borderRadius: "8px",
      margin: "10px",
    };
    return <div style={cardStyle}>{this.props.children}</div>;
  }
}
