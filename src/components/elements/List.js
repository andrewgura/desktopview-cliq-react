import React from "react";
import {Image} from "react-bootstrap";
import {css} from "glamor";

class List extends React.Component {
  //For hovering effects, when this list item is highlighted,
  //show the 2 icons in the bottom right
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
    this.hover = this.hover.bind(this);
  }

  //hover method for toggling visbility
  hover(e) {
    this.setState({
      isToggle: !this.state.isToggle
    });
  }
  render() {
    var background = this.props.background;

    const styles = {
      iStyle: css({display: "none"}),
      divStyle: css({
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        margin: "5px",
        padding: "0 !important",
        width: "250px",
        height: "250px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "grayscale(100%)",
        position: 'relative',
        ":hover": {
          filter: "grayscale(0%)"
        },
        transition: "all 0.3s ease 0s"
      }),
      iconDiv: css({
        margin: '0',
        position: 'absolute',
        bottom: '0',
        right: '0'
      })
    };

    return (
      <div className={styles.divStyle} onMouseEnter={this.hover} onMouseLeave={this.hover}>
        <Image src={this.props.logo} responsive/>
        <div className={styles.iconDiv}>
          <i style={{display: this.state.isToggle ? '': 'none'}} class="fa fa-file-text-o"/>
          <i style={{display: this.state.isToggle ? '': 'none'}} class="fa fa-chain"/>
        </div>
      </div>
    );
  }
}

export default List;
