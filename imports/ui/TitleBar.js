import React, { Component } from 'react';

export default class TitleBar extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{title}</h1>
          { subtitle ? <h3 className="title-bar__sub-title">{subtitle}</h3> : '' }
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string
};

TitleBar.defaultProps = {
  // title: 'Default title';
};
