import React, { Component } from "react";
import "./App.css";

import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Info from "./components/Info";
import Box from "./components/Box";
import Bottom from "./components/Bottom";
import About from "./components/About";

class App extends Component {
  //Broke up the text to make return statement easier to read
  text = {
    healthy: "Building the foundain for the new non-profit health provider to go from 0 members to 50,000.",
    eductional: "Making a Webby Honoree out of the midwest's top culinary institue.",
    financial: "Transforming the interactive home of the first bank to open exclusively on the internet.",
    environmental: "Empowering Chicago's low-income residents to reduce energy bills by 20%.",
    delicious: "Reenergizing the leading fondue restaurant's mobile strategy to reduce bounce rate by 79%.",
    charitable: "Serving the 5,000 athletes in the Chicago-born Special Olympics.",
    inventive: "Building web and mobile applications for the inventor, entrepreneur, and 'warm-blooded shark' on ABC's Shark Tank.",
    holisitc: "Strategizing and designing the digital brand for Chicago's hotInfo venture-backed weight loss startup.",
    luxurious: "Vivamus ac ultrices augue. Pellenteque convallis velit nulla, vitae efficitur massa."
  };

  render() {
    return (
      <div>
        <Hero />
        <Mission />
        <Info
          background="https://www.cliquestudios.com/wp-content/uploads/2016/03/background.jpg?_=1462822291"
          logo="https://www.cliquestudios.com/wp-content/uploads/2016/03/logo-11.png?_=1462822291"
          header="Build Something Healthy"
          text={this.text.healthy}
          firstImg="https://www.cliquestudios.com/wp-content/uploads/2016/04/screen-1-702x1024.png?_=1462822292"
          secondImg="https://www.cliquestudios.com/wp-content/uploads/2016/04/screen-2-702x1024.png?_=1462822291"
          thirdImg="https://www.cliquestudios.com/wp-content/uploads/2016/04/screen-3.png?_=1462822291"
        />
        <Info
          background="https://www.cliquestudios.com/wp-content/uploads/2016/03/background-1.jpg?_=1462822291"
          logo="https://www.cliquestudios.com/wp-content/uploads/2016/03/logo-10.png?_=1462822291"
          header="Build Something Eductional"
          text={this.text.eductional}
          firstImg="https://www.cliquestudios.com/wp-content/uploads/2016/03/screenshot2-2.png?_=1462822291"
          secondImg="https://www.cliquestudios.com/wp-content/uploads/2016/03/screenshot1-2.png?_=1462822291"
        />
        <Info
          background="https://www.cliquestudios.com/wp-content/uploads/2016/03/background-5.jpg?_=1462822291"
          logo="https://www.cliquestudios.com/wp-content/uploads/2016/03/logo-12.png?_=1462822291"
          header="Build Something Financial"
          text={this.text.financial}
          secondImg="https://www.cliquestudios.com/wp-content/uploads/2016/04/parallax3-1.png?_=1462822292"
          firstImg="https://www.cliquestudios.com/wp-content/uploads/2016/04/parallax2-1.png?_=1462822291"
          transformFirst="translate(93%,-5%) rotate(30deg)"
          transformSecond="rotate(-24deg);"
        />
        <Info
          background="https://www.cliquestudios.com/wp-content/uploads/2016/03/background-3.jpg?_=1462822291"
          header="Build Something Environmental"
          logo="https://www.cliquestudios.com/wp-content/uploads/2016/03/logo-5.png?_=1462822291"
          text={this.text.environmental}
          firstImg="https://www.cliquestudios.com/wp-content/uploads/2016/03/screenshot-1.jpg?_=1462822291"
        />
        <Info
          background="https://www.cliquestudios.com/wp-content/uploads/2016/03/background-4.jpg?_=1462822291"
          header="Build Something Delicious"
          logo="https://www.cliquestudios.com/wp-content/uploads/2016/03/logo-7.png?_=1462822291"
          text={this.text.delicious}
          firstImg="http://khalidlemar.com/wp-content/uploads/2016/10/iPhone-7-plus-stock-wallpaper.png"
          secondImg="http://khalidlemar.com/wp-content/uploads/2016/10/iPhone-7-plus-stock-wallpaper.png"
          thirdImg="http://khalidlemar.com/wp-content/uploads/2016/10/iPhone-7-plus-stock-wallpaper.png"
          transformFirst="translate(-15%, -5%)"
          transformSecond="translate(7%, -5%)"
          transformThird="translate(30%, -5%)"
        />
        <Info
          background="http://cliquestudios.com/wp-content/uploads/2016/03/background-2.jpg?_=1462822291"
          header="Build Something Charitable"
          logo="https://www.cliquestudios.com/wp-content/uploads/2016/03/logo-6.png?_=1462822291"
          text={this.text.charitable}
          firstImg="https://www.cliquestudios.com/wp-content/uploads/2016/04/screen-1-702x1024.png?_=1462822292"
          secondImg="https://www.cliquestudios.com/wp-content/uploads/2016/04/screen-2-702x1024.png?_=1462822291"
          thirdImg="https://www.cliquestudios.com/wp-content/uploads/2016/04/screen-3.png?_=1462822291"
        />
        <Info
          background="http://cliquestudios.com/wp-content/uploads/2016/03/background-9.jpg?_=1462822291"
          header="Build Something Inventive"
          logo="https://www.cliquestudios.com/wp-content/uploads/2016/03/logo-4.png?_=1462822291"
          text={this.text.inventive}
          firstImg="https://www.cliquestudios.com/wp-content/uploads/2016/03/screenshot2-2.png?_=1462822291"
          secondImg="https://www.cliquestudios.com/wp-content/uploads/2016/03/screenshot1-2.png?_=1462822291"
        />
        <Info
          background="http://cliquestudios.com/wp-content/uploads/2016/03/background-7.jpg?_=1462822291"
          header="Build Something Holisitc"
          logo="https://www.cliquestudios.com/wp-content/uploads/2016/03/logo-3.png?_=1462822291"
          text={this.text.holisitc}
          secondImg="https://www.cliquestudios.com/wp-content/uploads/2016/04/parallax3-1.png?_=1462822292"
          firstImg="https://www.cliquestudios.com/wp-content/uploads/2016/04/parallax2-1.png?_=1462822291"
          transformFirst="translate(93%,-5%) rotate(30deg)"
          transformSecond="rotate(-24deg);"
        />
        <Info
          background="http://cliquestudios.com/wp-content/uploads/2016/03/background-6.jpg?_=1462822291"
          header="Build Something Luxurious"
          logo="https://www.cliquestudios.com/wp-content/uploads/2016/03/logo-8.png?_=1462822291"
          text={this.text.luxurious}
          firstImg="https://www.cliquestudios.com/wp-content/uploads/2016/03/screenshot-1.jpg?_=1462822291"
        />
        <Box />
        <Bottom />
        <About />
      </div>
    );
  }
}

export default App;
