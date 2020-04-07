import styled, { keyframes } from 'styled-components';

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
  background: rgb(92, 3, 3);
  background: linear-gradient(
    circle,
    rgba(92, 3, 3, 1) 0%,
    rgba(149, 0, 0, 1) 42%,
    rgba(148, 4, 4, 1) 54%,
    rgba(145, 6, 6, 1) 68%,
    rgba(142, 8, 8, 1) 74%,
    rgba(120, 5, 5, 1) 86%,
    rgba(84, 1, 1, 1) 100%,
    rgba(48, 1, 21, 1) 100%
  );

  div {
    svg {
      animation: ${rotate} 1s linear infinite;
    }
  }
`;
