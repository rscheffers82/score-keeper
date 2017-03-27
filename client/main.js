import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

const renderPlayers = (playersList) => {
  return playersList.map( (player) => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s)
        <button onClick={() => {
          Players.update(player._id, { $inc: {score: 1} });
        }}>+</button>
        <button onClick={() => {
          Players.update(player._id, { $inc: {score: -1} });
        }}>-</button>
        <button onClick={()=> Players.remove({player._id }); }>x</button>
      </p>
    );
  });
};

handleSubmit = (e) => {
  e.preventDefault();
  let name = e.target.playerName.value;
  if (name) {
    e.target.playerName.value = '';
    Players.insert({
      name,
      score: 0
    });
  } else {
    e.target.playerName.focus();
  }
};

Meteor.startup( () => {
  Tracker.autorun( () => {
    var players = Players.find().fetch();
    renderPlayers(players);
    let title = 'Score Keep';
    let jsx = (
      <div>
        <h1>{title}</h1>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
