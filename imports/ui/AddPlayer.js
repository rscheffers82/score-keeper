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
      <form onSubmit={this.onSubmit}>
        <input type="text" name="playerName" placeholder="Player name" />
        <button>Add Player</button>
      </form>
    );
  }
};
