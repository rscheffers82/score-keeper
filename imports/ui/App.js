import React, { Component } from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends Component {

  render() {
    const { title, players } = this.props;
    return (
      <div>
          <TitleBar title={title} />
          <div className="wrapper">
            <PlayerList players={players} />
            <AddPlayer />
        </div>
      </div>
    );
  }
};

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
};
