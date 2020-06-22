import React from "react";
import "../styles/_rocket.scss";

const FINAL_POSITION_BOTTOM_VAL = "calc(85vh)";

function generateEmptyListEls(quantity) {
  return [...Array(quantity)].map(() => <li key={`quantity-${quantity++}`} />);
}

export default function RocketCore({ launchStart, onLaunchHandler }) {
  function timeToPositionPercent() {
    if (launchStart) {
      return FINAL_POSITION_BOTTOM_VAL;
    }

    return `calc(300px)`;
  }

  const launchRocket = () => {
    onLaunchHandler();
  };

  return (
    <>
      <div className="rocket" style={{ bottom: timeToPositionPercent() }}>
        <div
          className="rocket__body"
          onClick={launchRocket}
          style={{ cursor: "pointer" }}
        >
          <div className="rocket__body__main" />
          <div className="rocket__body__fin rocket__body__fin__left" />
          <div className="rocket__body__fin rocket__body__fin__right" />
          <div className="rocket__body__window" />
        </div>
        <div className="rocket__exhaust__flame" />
        <ul className="rocket__exhaust__fumes">{generateEmptyListEls(9)}</ul>
      </div>
      <ul className="stars">{generateEmptyListEls(7)}</ul>
    </>
  );
}
