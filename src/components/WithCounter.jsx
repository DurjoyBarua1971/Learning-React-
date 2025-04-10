import React from "react";

const withCounter = (WrappedComponent) => {
  const newComponent = (props) => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    return <WrappedComponent count={count} increment={increment} {...props} />;
  };

  return newComponent;
};

export default withCounter;
