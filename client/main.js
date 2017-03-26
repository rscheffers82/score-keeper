import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'Bas',
  score: 23
},{
  _id: '2',
  name: 'Zorana',
  score: 33
},{
  _id: '3',
  name: 'Roy',
  score: -12
}];

const renderPlayers = (playersList) => {
  return playersList.map( (player) => {
    return <p key={player._id}>{player.name} has {player.score} point(s)</p>
  });
};

Meteor.startup( () => {
  let title = 'Score Keep';
  let jsx = (
    <div>
      <h1>{title}</h1>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
