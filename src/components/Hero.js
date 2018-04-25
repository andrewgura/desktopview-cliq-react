import React from "react";
import Navbar from "./Navbar";


class Hero extends React.Component {
  render() {

    const sectionStyle = {
      backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://thehonestshruth-u5uqmvv6qrnl.stackpathdns.com/wp-content/uploads/2017/03/Chicago-7.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: '100vh'
    },
    highlight = {
      backgroundColor: '#cccccc52',
      paddingRight: "10px",
      paddingLeft: "10px",
      textTransform: "uppercase",
      fontSize: '2.5vw'
    },
    buildStyle = {
      textTransform: 'uppercase',
      borderBottom: '2px solid white',
      paddingBottom: '5px',
      display: 'inline-block',
      marginTop: "6.5vw",
      fontSize: '1.5vw',
      letterSpacing: '2px'
    },
    heroCenter = {
      top: '12%',
      display: 'block',
      position: 'relative',
      left: '20px',
      right: '0',
      margin: 'auto 150px'
    },
    downArrow = {
      display: 'inline-flex',
      marginTop: '30px',
      border: '1px solid #fff',
      borderRadius: '0px',
      padding: '8px'
    }

    return (
      <section style={sectionStyle}>
      <Navbar/>
        <div style={heroCenter}>
          <h3>An award-winning <span style={highlight}>Digital Strategy</span>, <span style={highlight}>Design</span>, <span style={highlight}>Engineering</span> and <span style={highlight}>Marketing</span> firm.</h3>
          <div>
            <span style={buildStyle}>Build Something</span>
          </div>
          <div style={downArrow}>
            <i class='fa fa-angle-down'/>
          </div>
        </div>
    </section>
    );
  }
}

export default Hero;
