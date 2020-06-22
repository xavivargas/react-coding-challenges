import React from "react";
import "../styles/_launchpad.scss";

export default function LaunchPad({ Rocket }) {
  return (
    <div className="launchpad">
      <Rocket key={"rocket-core-1"} />
    </div>
  );
}
