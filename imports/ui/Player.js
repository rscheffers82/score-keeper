import React, { Component } from 'react';
import { Players } from './../api/players';

export default class Player extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const { player } = this.props;
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s)
        <button onClick={() => {
          Players.update(player._id, { $inc: {score: 1} });
        }}>+</button>
        <button onClick={() => {
          Players.update(player._id, { $inc: {score: -1} });
        }}>-</button>
        <button onClick={()=> Players.remove(player._id) }>x</button>
      </p>
    );
  }
}

Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
