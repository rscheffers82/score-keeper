import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';

handleSubmit = (name) => Players.insert({ name, score: 0 });

Meteor.startup( () => {
  Tracker.autorun( () => {
    var players = Players.find().fetch();
    // renderPlayers(players);
    let jsx = (
      <div>
        <TitleBar title={'Score Keep'} subTitle={'Created by Roy Scheffers'} />
        <PlayerList players={players}/>
        <AddPlayer handleSubmit={this.handleSubmit}/>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
