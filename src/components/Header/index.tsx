import React from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

const Header = ({ productsTotal }: any) => (
  <Container>
    <Link to="/">
      <div className="container-image">
        <img src={logo} className="image logo" alt="logo" />
      </div>
    </Link>

    <Cart to="/cart" className="container-cart">
      <div className="wrapper">
        <strong className="title">Meu carrinho</strong>
        <span className="text">{productsTotal} itens</span>
      </div>

      <MdShoppingBasket size={36} color="#FFFFFF" />
    </Cart>
  </Container>
);

export default connect((state: any) => ({
  productsTotal: state.cart.length,
}))(Header);
