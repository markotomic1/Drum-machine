import React from "react";
import DrumPad from "./DrumPad";
import bankOne from "./data";

function PadBank(props) {
  const Styled = {
    backgroundColor: "orange",
    float: "right",
    height: 100,
    width: 250,
    marginTop: 10,
    marginRight: 30,
    boxShadow: "3px 3px 5px black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const padStyle = {
    marginTop: 120,
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    justifyContent: "center",
  };
  const pad = bankOne.map((item) => {
    return (
      <DrumPad
        key={item.keyCode}
        id={item.id}
        keyTrigger={item.keyTrigger}
        url={item.url}
      />
    );
  });
  return (
    <div>
      <div id="display" style={Styled}></div>
      <div className="pad-bank" style={padStyle}>
        {pad}
      </div>
    </div>
  );
}
export default PadBank;
