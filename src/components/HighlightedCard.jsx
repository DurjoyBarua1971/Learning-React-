import React from "react";
import BaseCard from "./BaseCard";

export default class HighlightedCard extends BaseCard {
  render() {
    const baseElement = super.render();
    const highlightedStyle = {
      ...baseElement.props.style, // Spread BaseCard's styles
      border: "2px solid blue",
    };
    return <div style={highlightedStyle}>{this.props.children}</div>;
  }
}
