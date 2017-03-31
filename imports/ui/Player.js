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
        <div className="player">
          <div className="">
            <h3 className="player__name">
              {player.name}
            </h3>
            <p className="player__stats">
              {player.score} point(s)
            </p>
          </div>
          <div className="player__actions">
            <button className="button button__round" onClick={() => {
              Players.update(player._id, { $inc: {score: 1} });
            }}>+</button>
            <button className="button button__round" onClick={() => {
              Players.update(player._id, { $inc: {score: -1} });
            }}>-</button>
            <button className="button button__round" onClick={()=> Players.remove(player._id) }>x</button>

          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
