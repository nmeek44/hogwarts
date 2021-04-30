import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hoglist from "./Hoglist";

class App extends Component {

  state = {
    display: "Start",
    filter: "",
    pigs: []
  }

//Show hog details via click

//Filter greased hogs

//Sort by Name

//Sort by weight

  render() {
    console.log(hogs)
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
