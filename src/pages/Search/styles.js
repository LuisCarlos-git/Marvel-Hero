import styled from 'styled-components';

export const Container = styled.div`
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
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: row;
    max-width: 600px;
    width: 100%;
    input {
      color: #444;
      font-size: 20px;
      padding: 0 15px;
      text-transform: uppercase;
      width: calc(100% - 45px);
      height: 50px;
      border: 0;
      border-radius: 4px 0 0 4px;

      &::placeholder {
        color: #666;
      }
    }

    button {
      width: 45px;
      height: 50px;
      background: #fff;
      border: 0;
      border-radius: 0 4px 4px 0;
    }
  }
  img {
    margin: 10px;
    padding-bottom: 30px;
  }
`;
