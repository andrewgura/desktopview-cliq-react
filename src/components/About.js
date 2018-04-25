import React from "react";
import {css} from "glamor";

class About extends React.Component {
  render() {
      const styles = {
        sectionStyle: css({
          marginTop: '50px',
          marginBottom: '20px'
        }),
        ulStyle: css({
          display: "inline-flex",
          marginLeft: "14vw",
          "@media screen and (max-width: 1575px)": {
            marginLeft: '6vw'
          }
        }),
        liStyle: css({
          color: 'black',
          marginRight: "5vw",
          textTransform: "uppercase",
          ":last-child": {
            marginLeft: "13vw"
          },
          "@media screen and (max-width: 1575px)": {
            margin: '0'
          },
          "@media screen and (max-width: 1050px)": {
            ":last-child": {
              marginLeft: "6vw"
            },
          }
        })
      }


    return (
      <section className={styles.sectionStyle}>
          <ul className={styles.ulStyle}>
                <li className={styles.liStyle}><i class="fa fa-small fa-copyright"></i>2015 Clique Studios, LLC.</li>
                <li className={styles.liStyle}><i class="fa fa-small fa-phone"></i>312-379-9329</li>
                <li className={styles.liStyle}><i class="fa fa-small fa-map-marker"></i>410 S. Michigan Ave, Suite 908, Chicago, IL 60605</li>
                <li className={styles.liStyle}>
                  <i class="fa fa-facebook"/>
                  <i class="fa fa-youtube"/>
                  <i class="fa fa-flickr"/>
                  <i class="fa fa-twitter"/>
                  <i class="fa fa-linkedin"/>
                </li>
          </ul>
      </section>
    );
  }
}

export default About;
