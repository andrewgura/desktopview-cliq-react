import React from "react";
import { Image } from "react-bootstrap";
import NewButton from "./elements/NewButton";
import {css} from "glamor";

class Info extends React.Component {
  render() {
    //Props
    var background = this.props.background;
    var transformFirst = this.props.transformFirst;
    var transformSecond = this.props.transformSecond;
    var transformThird = this.props.transformThird;

    const styles = {
      section: css({
        backgroundImage: background ? `url(${background})` : "#bb9999",
        position: "relative",
        paddingTop: "7.3vw",
        paddingBottom: '7.3vw',
        overflow: 'hidden'
      }),
      rightCol: css({
        width: '50%',
        overflow: 'hidden'
      }),
      leftCol: css({
        zIndex: '4',
        width: '50%'
      }),
      img1Style: css({
        maxWidth: '50%',
        maxHeight: '99%',
        position: 'absolute',
        transform: transformFirst ? transformFirst :'translate(12%, 1%)',
        zIndex: '3'
      }),
      img2Style: css({
        maxWidth: '50%',
        maxHeight: '99%',
        position: 'absolute',
        transform: transformSecond ? transformSecond : 'translate(40%,-5%)',
        zIndex: '2'
      }),
      img3Style: css({
        maxWidth: '50%',
        maxHeight: '99%',
        position: 'absolute',
        transform: transformThird ? transformThird : 'translate(55%,-1%)',
        zIndex: '1'
      })
    }

    return (
      <section className={styles.section}>
        <div class="info-row">
          <div className={styles.leftCol}>
              <Image src={this.props.logo} alt="" responsive  />
              <h1>{this.props.header}</h1>
              <p>{this.props.text}</p>
              <NewButton text="View Case Study"/>
            </div>
              <div className={styles.rightCol}>
                  <img className={styles.img1Style} src={this.props.firstImg} alt=''/>
                  <img className={styles.img2Style} src={this.props.secondImg} alt=''/>
                  <img className={styles.img3Style} src={this.props.thirdImg} alt=''/>
            </div>
          </div>
      </section>
    );
  }
}

export default Info;
