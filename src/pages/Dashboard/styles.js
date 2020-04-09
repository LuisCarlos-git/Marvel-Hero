import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 15px;
      width: 100%;
      margin: 50px 50px;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;

        background: #fff;
        border-radius: 5px;
        img {
          width: calc(100% - 30px);
          height: 200px;
          border-radius: 5px;
        }

        span {
          font-size: 15px;
          color: #555;
          margin-bottom: 15px;
        }

        button {
          border: 0;
          background: #f00;
          width: 100%;
          height: 40px;
          color: #fff;
          font-size: 17px;
          border-radius: 5px;
          transition: background 0.2s;
          letter-spacing: 4px;
          overflow: hidden;
          margin-top: auto;

          &:hover {
            background: ${darken(0.1, '#f00')};
          }
        }
      }
    }
  }
`;
