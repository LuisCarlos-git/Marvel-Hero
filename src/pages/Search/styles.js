import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
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
