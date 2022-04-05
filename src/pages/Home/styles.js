import styled from 'styled-components';

import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 20px;

  .container-image {
    align-self: center;
    max-width: 250px;
    margin: 0 auto;

    .image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  > .title {
    font-size: 16px;
    line-height: 20px;
    color: #333333;
    margin-top: 5px;
  }

  > .text {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  .button {
    background-color: #7159c1;
    color: #ffffff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    transition: 0.35s background-color;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: ${darken(0.05, '#7159c1')};
    }

    > .wrapper {
      display: flex;
      align-items: center;
      padding: 12px;
      background-color: rgba(0, 0, 0, 0.1);

      svg {
        height: 100%;
        margin-right: 3px;
      }
    }

    > .text {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;
