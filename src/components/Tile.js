import React, { Component } from "react";

class Tile extends Component {

    state = {
        clicked: false
    }

    showDetails=() => {
        console.log("hello")
        this.clicked === false ? <p>{this.props.pigObj.weight}</p> : <p>{this.props.pigObj.weight}</p> 

    }

  render() {
    return (
      <div>
        <h1>{this.props.pigObj.name}</h1>
            {this.showDetails()}
      </div>
    );
  }
}

export default Tile;
