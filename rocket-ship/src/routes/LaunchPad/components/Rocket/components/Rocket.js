import React, { useState, PureComponent } from "react";
import RocketCore from "./RocketCore";

const FunctionalRocket = React.memo(() => {
  const [launchStart, setLaunchStart] = useState(false);
  const launchHandler = () => {
    setLaunchStart(!launchStart);
  };

  return (
    <RocketCore launchStart={launchStart} onLaunchHandler={launchHandler} />
  );
});

class ClassRocket extends PureComponent {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now(),
      launchStart: false,
    };
  }

  render() {
    const { launchStart } = this.state;
    const launchHandler = () => {
      this.setState({ launchStart: !launchStart });
    };

    return (
      <RocketCore
        launchStart={this.state.launchStart}
        onLaunchHandler={launchHandler}
      />
    );
  }
}

export { ClassRocket, FunctionalRocket };
