import React, { Component } from 'react'
import Restart from '../Restart'
import { Modal, WinnerText, WinnerTitle } from './style'

class Winner extends Component {
  render() {
    if (this.props.show === false) {
      return null;
    }
    return (
      <Modal>
        <WinnerTitle>O vencedor foi:</WinnerTitle>
        <WinnerText>{this.props.winner}</WinnerText>
        <Restart 
          closeModel={this.props.closeModel} 
          restart={this.props.restart}>
        </Restart>
      </Modal>
    )
  }
}

export default Winner