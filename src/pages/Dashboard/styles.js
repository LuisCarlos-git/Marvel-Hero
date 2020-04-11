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
      display: flex;
      flex-direction: column;
      width: 70%;
      margin: 50px 50px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 5px;

      li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin: 15px 15px;
        border: 1px dashed #eee;

        border-radius: 5px;

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: center;
          img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin-right: 10px;
            background: #eee;
          }

          span {
            padding: 0 10px;
            font-size: 20px;
            color: #333;
          }
        }

        button {
          border: 0;
          background: #f00;
          width: 20%;
          height: 40px;
          color: #fff;
          font-size: 17px;
          border-radius: 5px;
          transition: background 0.2s;
          letter-spacing: 4px;
          overflow: hidden;

          &:hover {
            background: ${darken(0.1, '#f00')};
          }
        }
      }
    }
  }
`;
