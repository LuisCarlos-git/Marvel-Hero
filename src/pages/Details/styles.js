import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100% - 75px);
`;
export const DetailsHero = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: 50px auto;
  background: #fff;
  padding: 20px;
  border-radius: 5px;

  main {
    display: flex;
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;

    div {
      display: block;
      width: 100%;
    }

    img {
      width: 60%;
      max-width: 300px;
      height: 300px;
      border-radius: 5px;
      margin-right: 10px;
    }
  }
`;

export const Comics = styled(PerfectScrollbar)`
  max-height: 300px;
  li {
    margin: 5px;
    padding: 5px;

    span {
      width: 100%;
      color: #333;
      font-size: 18px;
      border-bottom: 1px solid #eee;
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  color: #222;
  border-bottom: 1px solid #eee;
  margin-bottom: 15px;
`;
export const Description = styled.span`
  width: 100%;
  font-size: 20px;
  color: #666;

  ${({ notDescription }) =>
    !notDescription &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;
