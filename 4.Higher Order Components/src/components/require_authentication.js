import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposeComponent) {
  class Authentication extends Component {
    render() {
      return <ComposeComponent { ...this.props } />;
    }
  }

  function mapStateToProps(state){
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}