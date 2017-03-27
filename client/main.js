import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

const renderPlayers = (playersList) => {
  return playersList.map( (player) => {
    return <p key={player._id}>{player.name} has {player.score} point(s)</p>
  });
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
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
  Players.insert({
    name: 'Roy',
    score: 11
  });
});
