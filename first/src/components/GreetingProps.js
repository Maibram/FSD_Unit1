import React, { Component } from 'react'

export default class GreetingProps extends Component {
  render() {
    return (
      <div>
        <h1>Hi {this.props.username} and my message is {this.props.msg}</h1>
      </div>
    )
  }
}
