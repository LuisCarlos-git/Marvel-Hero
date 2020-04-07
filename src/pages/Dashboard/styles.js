import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

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

  ul {
    background: none;
    height: 550px;
    width: calc(100% - 75px);
    max-height: 100%;
    margin: 50px auto;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
  }
`;
export const CardList = styled(PerfectScrollbar)`
  max-height: 550px;
`;

export const Card = styled.div`
  margin: 50px auto;
  max-width: 300px;
  max-height: 300px;
  background: #fff;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  padding: 20px;

  li {
    display: flex;
    flex-direction: column;

    img {
      width: 200px;
      height: 200px;
    }

    span {
      font-size: 15px;
    }
  }
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  img {
    border-radius: 5px;
    margin-right: 20px;
    width: 300px;
  }
  div {
    display: flex;
    flex-direction: column;

    > span {
      margin-bottom: 20px;
    }

    span {
      font-weight: bold;
      font-size: 18px;
      color: #666;
      strong {
        font-size: 20px;
        color: #000;
      }
    }
  }
`;
