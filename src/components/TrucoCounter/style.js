import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: var(--color-zero);
  text-align: center;
  margin-top: 60px;
  margin-bottom: 40px;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
  max-width: 380px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 425px;
  justify-content: center;
`

export const Vs = styled.span`
  color: var(--color-zero);
  font-size: 36px;
  font-weight: bold;
  position: absolute;
  top: 250px;
`