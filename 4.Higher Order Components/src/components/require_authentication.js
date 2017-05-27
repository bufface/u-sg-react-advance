import React, { Component } from 'react';

export default function (ComposeComponent) {
  class Authentication extends Component {
    render() {
      return <ComposeComponent { ...this.props } />;
    }
  }

  return Authentication;
}