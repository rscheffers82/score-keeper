import React, { Component } from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends Component {

  render() {
    const { title, players, subtitle } = this.props;
    return (
      <div>
          <TitleBar title={title} subtitle={subtitle}/>
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
  subtitle: React.PropTypes.string,
  players: React.PropTypes.array.isRequired
};
