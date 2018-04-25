import React from "react";
import {css} from "glamor";

class Navbar extends React.Component {
  //custom made mobile nav menu
  burgerToggle() {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "grid") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "grid";
    }
  }

  render() {
    const styles = {
      a: css({
        color: '#FFF',
        textDecoration: 'none',
        textTransform: 'uppercase',
        display: 'inline-block',
        margin: 'auto 3vw',
        ':hover': {
          color: "#FFF",
          textDecoration: 'none'
        },
        '@media screen and (max-width: 1100px)': {
          margin: 'auto 2.5vw'
        }
      }),
      span: css({top: "42px", right: "50px", position: "absolute", padding: "6px", backgroundColor: 'rgba(204, 204, 204, 0.32)'}),
      logo: css({margin: '0'})
    }

    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <a className={styles.logo}>
              <img src="https://pbs.twimg.com/profile_images/1696963747/clique-logo_400x400.jpg" width="125px" height="125px" alt=""/></a>
            <a className={styles.a} style={{
              paddingBottom: '10px',
              borderBottom: '2px solid orange'
            }} href="/">Work</a>
            <a className={styles.a} href="/">About Us</a>
            <a className={styles.a} href="/">Services</a>
            <a className={styles.a} href="/">Clique University</a>
            <a className={styles.a} href="/">Career</a>
            <a className={styles.a} href="/">Contact</a>
            <span className={styles.span}>312-379-9329</span>
          </div>
        </div>
        {/* mobile menu view */}
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}/>
          <div className="narrowLinks">
            <a href="/" onClick={this.burgerToggle}>Work</a>
            <a href="/" onClick={this.burgerToggle}>About Us</a>
            <a href="/" onClick={this.burgerToggle}>Services</a>
            <a href="/" onClick={this.burgerToggle}>Clique University</a>
            <a href="/" onClick={this.burgerToggle}>Career</a>
            <a href="/" onClick={this.burgerToggle}>Contact</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
