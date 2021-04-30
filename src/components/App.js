import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hoglist from "./Hoglist";
// import hog-imgs from "src/hog-imgs";
class App extends Component {

  state = {
    display: "Start",
    filter: "",
    pigs: hogs,
    image: "URL"
  }
  


//Show hog details via click

//Filter greased hogs

//Sort by Name

//Sort by weight

returnImage (name) {
let pigImages = require(`../hog-imgs/${name}`)
console.log(pigImages)

}

  render() {
    // console.log(hog-imgs)
    return (
      <div className="App">
        <div className="ui grid container">
          <ui>
          </ui>  
        </div>
        <Nav />
        <Hoglist pigs={this.state.pigs}/>
      </div>
    );
  }
}

export default App;
