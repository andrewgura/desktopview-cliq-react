import React from "react";
import {Grid, Row, Col} from "react-bootstrap";

class Mission extends React.Component {
  render() {
    const sectionStyle = {
        backgroundColor: "#fff",
        paddingTop: "175px",
        paddingBottom: '175px',
        textAlign: "left",
        color: "black"
      },
      divStyle = {
        borderLeft: "2px solid orange",
        paddingLeft: "25px",
        marginLeft: "50px"
      },
      hStyle = {
        color: "black"
      },
      pStyle = {
        color: "black"
      };

    return (
      <section style={sectionStyle}>
        <Grid>
          <Row>
            <Col>
              <div style={divStyle}>
                <h2 style={hStyle}>We believe the work is what matters.</h2>
                <p style={pStyle}>Here is some of ours.</p>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Mission;
