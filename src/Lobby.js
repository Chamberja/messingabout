import React, { Component } from 'react';
import Room from './Room.js';

class Lobby extends Component {
  render() {
    return (
      <div className="lobby">
        <h1>Lobby</h1>
        { this.props.rooms.map(room => <Room key={ room.ChatRoomId } name={ room.RoomName }></Room> )}
        <button onClick={() => this.props.addRoom({ id: Math.random(), name: Math.random() }) }>Add</button>
      </div>
    );
  }
}

export default Lobby;
