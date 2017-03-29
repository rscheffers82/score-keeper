import React, { Component } from 'react';
import Player from './Player';

export default class PlayerList extends Component {
  renderPlayers() {
    const {players} = this.props;
    if (players.length === 0 ) return <p>Add a player to get started</p>;
    else return players.map( (player) => <Player key={player._id} player={player}/> );
  }

  render() {
    const players = this.props;
    return (
      <div>{this.renderPlayers()}</div>
    );
  }
};

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
};
