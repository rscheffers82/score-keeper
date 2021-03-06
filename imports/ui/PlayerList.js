import React, { Component } from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends Component {
  renderPlayers() {
    const {players} = this.props;
    if (players.length === 0 ) return (
      <div className="item">
        <p className="item__message item__message__empty">Add a player to get started</p>
      </div>
    );
    else return players.map( (player) => <Player key={player._id} player={player}/> );
  }

  render() {
    const players = this.props;
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
};
