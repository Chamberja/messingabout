import React, { Component } from 'react';

class Room extends Component {
  render() {
    return (
      <div className="room">
        <h1>{ this.props.name }</h1>
        <img alt={ this.props.name } src="http://via.placeholder.com/350x150" />
        <button>Join</button>
      </div>
    );
  }
}

export default Room;
