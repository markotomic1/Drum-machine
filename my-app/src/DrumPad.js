import React from "react";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.play();
    document.getElementById("display").innerHTML = this.props.id;
  }
  render() {
    const DrumStyle = {
      backgroundColor: "orange",
      padding: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid black",
      width: 100,
      height: 100,
      margin: 5,
      boxShadow: "3px 3px 5px black",
      cursor: "pointer",
    };

    return (
      <div
        className="drum-pad"
        id={this.props.id}
        onClick={this.handleClick}
        style={DrumStyle}
      >
        <audio
          className="clip"
          src={this.props.url}
          id={this.props.keyTrigger}
        ></audio>
        {this.props.keyTrigger}
      </div>
    );
  }
}
export default DrumPad;
