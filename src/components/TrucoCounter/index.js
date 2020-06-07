import React, { Component } from 'react'
import Team from '../Team'
import { Title, Wrap, Vs, Container } from './style'

class TrucoCounter extends Component {
  constructor() {
    super()
    this.state = {
      nameA: "Nós",
      nameB: "Eles",
      pointsA: 0,
      pointsB: 0,
    }
  }

  updateNameA = ev => {
    this.setState({
      nameA: ev.target.value
    })
  }

  updateNameB = ev => {
    this.setState({
      nameB: ev.target.value
    })
  }

  addPointsA = () => {
    this.setState({
      pointsA: this.state.pointsA + 1
    })
  }

  removePointsA = () => {
    if(this.state.pointsA > 0) {
      this.setState({
        pointsA: this.state.pointsA -1
      })
    }
  }

  addPointsB = () => {
    this.setState({
      pointsB: this.state.pointsB + 1
    })
  }

  removePointsB = () => {
    if(this.state.pointsB > 0) {
      this.setState({
        pointsB: this.state.pointsB - 1
      })
    }
  }

  restartPoints = () => {
    this.setState({
      pointsA: 0,
      pointsB: 0
    })
  }

  render() {
    return (
      <Container>
        <Title>Contador de Truco</Title>
        <Wrap>
          <Team
            name={this.state.nameA}
            updateName={this.updateNameA}
            points={this.state.pointsA}
            addPoint={this.addPointsA}
            removePoint={this.removePointsA}
            restartPoints={this.restartPoints}
          ></Team>
          <Vs>VS</Vs>
          <Team
            name={this.state.nameB}
            updateName={this.updateNameB}
            points={this.state.pointsB}
            addPoint={this.addPointsB}
            removePoint={this.removePointsB}
            restartPoints={this.restartPoints}
          ></Team>
        </Wrap>
      </Container>
    )
  }
}

export default TrucoCounter