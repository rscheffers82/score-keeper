import React, { Component } from 'react';
import { Players } from './../api/players';

export default class Player extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const { player } = this.props;
    return (
      <div key={player._id} className="item">
        <p>
          {player.name} has {player.score} point(s)
        </p>
        <button onClick={() => {
          Players.update(player._id, { $inc: {score: 1} });
        }}>+</button>
        <button onClick={() => {
          Players.update(player._id, { $inc: {score: -1} });
        }}>-</button>
        <button onClick={()=> Players.remove(player._id) }>x</button>
      </div>
    );
  }
}

Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
