import React, { Component } from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends Component {
  constructor(props){
    super(props);
  }

  onSubmit = (e) => {
    e.preventDefault();

    let name = e.target.playerName.value;
    if (name) {
      e.target.playerName.value = '';
      Players.insert({ name, score: 0 });
    } else {
      e.target.playerName.focus();
    }
  }

  render() {
    return(
      <div className="item">
        <form className="form" onSubmit={this.onSubmit}>
          <input className="form__input" type="text" name="playerName" placeholder="Player name" />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
};
