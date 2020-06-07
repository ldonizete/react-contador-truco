import React, { Component } from 'react'
import Winner from '../../components/Winner'
import { Wrapper, Input, Points, Button, Counter } from './style'

class Team extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      winner: ''
    }
  }

  handleClick = () => {
    this.props.addPoint()
    if(this.props.points === 11) {
      this.setState({
        winner: this.props.name,
        show:true
      })
    }
  }  

  closeModel = () => {
    this.setState({
      show:false
    })
  }

  render() {
    return (
      <Wrapper>
        <Input 
          onChange={this.props.updateName}
          type="text"
          value={this.props.name}
        />
        <Counter>
          <Button
            onClick={this.handleClick}
          >
            <i className="fas fa-angle-up"></i>
          </Button>
          <Points>{this.props.points}</Points>
          <Button
            down onClick={this.props.removePoint}
          >
            <i className="fas fa-angle-down"></i>
          </Button>
        </Counter>
        <Winner 
          closeModel={this.closeModel}
          restart={this.props.restartPoints}
          winner={this.state.winner}
          show={this.state.show}
        >
        </Winner>
      </Wrapper>
    )
  }
}

export default Team
