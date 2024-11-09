import styled from 'styled-components';

export const ButtonContainer = styled.button.attrs({ type: 'button' })<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  width: 100%;
  height: 42px;
  background-color: ${({ disabled }) => (disabled ? '#D3A1D8' : '#81259D')}; 
  color: ${({ disabled }) => (disabled ? '#81259D' : '#FFF')}; 
  border: 1px solid ${({ disabled }) => (disabled ? '#D3A1D8' : '#81259D')}; 
  border-radius: 21px;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.6)}; 
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}; 
  }
`
