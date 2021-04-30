import React, { Component } from "react";
import Tile from './Tile.js'

class Hoglist extends Component {
  render(props) {
    console.log(this.props.pigs)
    return (
      <div>
        <ui className="ui eight wide column">
          {this.props.pigs.map(pig => <Tile  pigObj={pig} />)} 


        </ui>
      </div>
    );
  }
}

export default Hoglist;


