import styled, { keyframes } from 'styled-components';
import fundo from '../../assets/fundo.jpg';

const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }to{
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  height: 100%;
  background: #000 url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;

  div {
    svg {
      animation: ${rotate} 1s linear infinite;
    }
  }
`;
