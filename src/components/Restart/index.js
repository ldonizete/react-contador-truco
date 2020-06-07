import React, { Component } from 'react'
import { RestartButton } from './style'

class Restart extends Component {
  handleClick = () => {
    this.props.restart()
    this.props.closeModel() 
  }

  render() {
    return (
      <RestartButton onClick={this.handleClick}>
        <i className="fas fa-redo-alt"></i>
      </RestartButton>
    )
  }
}

export default Restart