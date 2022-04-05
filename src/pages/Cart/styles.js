import styled from 'styled-components';

import { darken } from 'polished';

export const ContainerCart = styled.div`
  padding: 30px;
  background-color: #ffffff;
  border-radius: 4px;
`;

export const ProductTable = styled.table`
  width: 100%;

  .head {
    > .row {
      color: #999;
      text-align: left;
      padding-top: 12px;
      text-transform: uppercase;
    }
  }

  .body {
    > .row {
      .column {
        padding-top: 12px;
        border-bottom: 1px solid #eeeeee;
      }
    }
  }
`;

export const Product = styled.tr`
  .image {
    height: 100px;
  }

  .title {
    color: #777777;
    display: block;
  }

  .text {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #151515;
  }

  .subtotal {
    color: #151515;
  }

  .wrapper-qtd {
    display: flex;
    align-items: center;

    .input {
      border: 1px solid #dddddd;
      border-radius: 4px;
      color: #666666;
      padding: 6px;
      width: 50px;
    }
  }

  .button {
    background-color: transparent;
    border: 0;
    padding: 6px;
  }
`;

export const Footer = styled.footer`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button {
    background-color: #7159c1;
    color: #ffffff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.35s background-color;

    &:hover {
      background-color: ${darken(0.05, '#7159C1')};
    }
  }
`;

export const Total = styled.footer`
  display: flex;
  align-items: baseline;

  .title {
    color: #999999;
    font-weight: bold;
  }

  .text {
    font-size: 28px;
    margin-left: 5px;
    color: #151515;
  }
`;
