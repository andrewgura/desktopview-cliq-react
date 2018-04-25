import React from "react";
import { Grid } from "react-flexbox-grid";
import NewButton from "./elements/NewButton";

class Bottom extends React.Component {
  render() {
    const sectionStyle = {
      backgroundColor: "#737390",
      paddingTop: "100px",
      textAlign: "center"
    },
      divStyle = {
        marginBottom: "100px"
      };

    return (
      <section style={sectionStyle}>
        <Grid>
          <h2>Talk to a real person.</h2>
          <div style={divStyle}>
            <NewButton color="orange" text="312-379-9329" />
            <NewButton color="orange" text="Message us" />
          </div>
        </Grid>
      </section>
    );
  }
}

export default Bottom;
