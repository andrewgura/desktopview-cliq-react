import React from "react";

class NewButton extends React.Component {
  render() {
    var color = this.props.color;

    const buttonStyle = {
      margin: "30px 25px 0 0",
      background: "transparent",
      border: "1px solid",
      borderColor: color ? color : "#fff",
      color: color ? color : "#fff",
      borderRadius: "5px",
      textTransform: "uppercase",
      letterSpacing: "3px",
      padding: "20px 30px",
      fontWeight: "bold"
    };

    return <button style={buttonStyle}>{this.props.text}</button>;
  }
}

export default NewButton;
