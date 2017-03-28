import React, { Component } from 'react';

export default class TitleBar extends Component {
  render() {
    const { title, subTitle } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string.isRequired
};

TitleBar.defaultProps = {
  // title: 'Default title';
};
