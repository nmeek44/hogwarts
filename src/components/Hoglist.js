import React, { Component } from "react";

class Hoglist extends Component {
  render() {
    return (
      <div>
        <ui className="ui eight wide column">
          {this.props.pigs.map(pig =>  pig.name={pig.name} pig={pig} )} 
        </ui>
      </div>
    );
  }
}

export default Hoglist;
