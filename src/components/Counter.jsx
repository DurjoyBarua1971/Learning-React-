import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div className="bg-amber-300 p-4 rounded-md shadow-md flex flex-col items-center gap-2">
        <p>Count: {this.state.count}</p>
        <button
          className="bg-amber-500 text-white p-2 rounded-md shadow-md hover:bg-amber-600 transition duration-300"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </div>
    );
  }

  //   render() {
  //     return (
  //       <div className="bg-amber-300 p-4 rounded-md shadow-md flex flex-col items-center gap-2">
  //         <p>Count: {this.state.count}</p>
  //         <button
  //           className="bg-amber-500 text-white p-2 rounded-md shadow-md hover:bg-amber-600 transition duration-300"
  //           onClick={() => this.setState({count: this.state.count + 1})}
  //         >
  //           Increment
  //         </button>
  //       </div>
  //     );
  //   }
}
