import React from 'react';
import Lobby from './Lobby';
import { connect } from 'react-redux';

const LobbyContainer = ({ rooms, addRoom }) => (
  <Lobby rooms={ rooms } addRoom={ addRoom } />
);

function addRoom(room) {
  return {
    type: 'ADD_ROOM',
    payload: {
      room
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rooms: state.rooms
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addRoom: room => dispatch(addRoom(room))
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (LobbyContainer);
