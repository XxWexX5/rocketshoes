import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.35s opacity;

  &:hover {
    opacity: 0.7;
  }

  > .wrapper {
    text-align: right;
    margin-right: 10px;

    .title {
      display: block;
      color: #ffffff;
    }

    .text {
      font-size: 12px;
      color: #999999;
    }
  }
`;
