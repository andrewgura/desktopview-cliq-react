import React from "react";
import {Grid} from "react-flexbox-grid";
import List from "./elements/List";
import {css} from 'glamor'

class Box extends React.Component {

  render() {
    const styles = {
      sectionStyle: css({marginTop: "100px", marginBottom: "100px", textAlign: "center"})
    }

    return (
      <section className={styles.sectionStyle}>
        <Grid>
          <List logo="http://via.placeholder.com/150x50" background="https://www.w3schools.com/howto/img_fjords.jpg"/>
          <List logo="http://via.placeholder.com/150x50" background="https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg"/>
          <List logo="http://via.placeholder.com/150x50" background="https://picjumbo.com/wp-content/uploads/pienza-town-in-tuscany_free_stock_photos_picjumbo_DSC04564-1570x1047.jpg"/>
          <List logo="http://via.placeholder.com/150x50" background="https://media.pixcove.com/H/4/1/Meadowlark-Landscapes-Nature-Bench-Park-Peaceful-F-3387.jpg"/>
          <List logo="http://via.placeholder.com/150x50" background="https://www.w3schools.com/howto/img_fjords.jpg"/>
          <List logo="http://via.placeholder.com/150x50" background="https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg"/>
          <List logo="http://via.placeholder.com/150x50" background="https://picjumbo.com/wp-content/uploads/pienza-town-in-tuscany_free_stock_photos_picjumbo_DSC04564-1570x1047.jpg"/>
          <List logo="http://via.placeholder.com/150x50" background="https://media.pixcove.com/H/4/1/Meadowlark-Landscapes-Nature-Bench-Park-Peaceful-F-3387.jpg"/>
          <List logo="http://via.placeholder.com/150x50" background="https://www.w3schools.com/howto/img_fjords.jpg"/>
          <List logo="http://via.placeholder.com/150x50" background="https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg"/>
          <List logo="http://via.placeholder.com/150x50" background="https://picjumbo.com/wp-content/uploads/pienza-town-in-tuscany_free_stock_photos_picjumbo_DSC04564-1570x1047.jpg"/>
          <List logo="http://via.placeholder.com/150x50" background="https://media.pixcove.com/H/4/1/Meadowlark-Landscapes-Nature-Bench-Park-Peaceful-F-3387.jpg"/>
        </Grid>
      </section>
    );
  }
}

export default Box;
