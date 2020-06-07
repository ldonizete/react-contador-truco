import styled from 'styled-components'

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 385px;
  width: 80vw;
  height: 250px;
  background: var(--color-primary);
  color: var(--color-zero);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 4px #00000040;
  position: absolute;
  top: 140px;
  left: 50%;
  margin-left: calc(-1 * (80vw / 2));
  z-index: 2;

  @media (min-width: 425px ) {
    margin-left: -192.5px;
  }
`

export const WinnerTitle = styled.h1`
  font-size: 24px;
`

export const WinnerText = styled.p`
  font-size: 18px;
`