import React from 'react';

import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

const Header = () => (
  <Container>
    <Link to="/">
      <div className="container-image">
        <img src={logo} className="image logo" alt="logo" />
      </div>
    </Link>

    <Cart to="/cart" className="container-cart">
      <div className="wrapper">
        <strong className="title">Meu carrinho</strong>
        <span className="text">3 itens</span>
      </div>

      <MdShoppingBasket size={36} color="#FFFFFF" />
    </Cart>
  </Container>
);

export default Header;
