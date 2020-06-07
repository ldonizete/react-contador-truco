import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 120px;
  color: var(--color-zero);
  font-size: 25px;
  text-align: center;
  background: transparent;
  border: none;
  outline: none;
  margin-bottom: 10px;

  &:focus {
    border-bottom: 2px solid var(--color-second);
  }
`

export const Points = styled.span`
  text-align: center;
  font-size: 36px;
  color: var(--color-zero);
  background: var(--color-primary);
  width: 75px;
`

export const Button = styled.button`
  border: none;
  background: var(--color-primary);
  color: var(--color-zer);
  font-size: 40px;
  padding: 15px 25px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  ${props => props.down && `
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px
  `}
`

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 4px #00000040;
`