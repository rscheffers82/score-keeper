import React, { Component } from 'react';

export default class TitleBar extends Component {
  render() {
    const { title, subTitle } = this.props;
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{title}</h1>
          { subTitle ? <h3>{subTitle}</h3> : '' }
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
