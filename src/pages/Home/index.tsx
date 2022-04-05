/* eslint-disable react/prop-types */
import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList, Product } from './styles';

const Home = () => {
  return (
    <ProductList>
      <Product>
        <div className="container-image">
          <img
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNFZ2E2HCN4wf9I07oS2f-qVH9ZZaHHY0CWenwMOMZzcfcgFVrhTCwhEx0frYkwDvUWLQuRwOMPw&usqp=CAc"
            alt="Tênis"
            className="image"
          />
        </div>
        <strong className="title">Tênis</strong>
        <span className="text">R$129,90</span>

        <button type="button" className="button">
          <div className="wrapper">
            <MdAddShoppingCart size={16} color="#FFFFFF" /> 3
          </div>

          <span className="text">Adicionar ao carrinho</span>
        </button>
      </Product>

      <Product>
        <div className="container-image">
          <img
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNFZ2E2HCN4wf9I07oS2f-qVH9ZZaHHY0CWenwMOMZzcfcgFVrhTCwhEx0frYkwDvUWLQuRwOMPw&usqp=CAc"
            alt="Tênis"
            className="image"
          />
        </div>
        <strong className="title">Tênis</strong>
        <span className="text">R$129,90</span>

        <button type="button" className="button">
          <div className="wrapper">
            <MdAddShoppingCart size={16} color="#FFFFFF" /> 3
          </div>

          <span className="text">Adicionar ao carrinho</span>
        </button>
      </Product>

      <Product>
        <div className="container-image">
          <img
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNFZ2E2HCN4wf9I07oS2f-qVH9ZZaHHY0CWenwMOMZzcfcgFVrhTCwhEx0frYkwDvUWLQuRwOMPw&usqp=CAc"
            alt="Tênis"
            className="image"
          />
        </div>
        <strong className="title">Tênis</strong>
        <span className="text">R$129,90</span>

        <button type="button" className="button">
          <div className="wrapper">
            <MdAddShoppingCart size={16} color="#FFFFFF" /> 3
          </div>

          <span className="text">Adicionar ao carrinho</span>
        </button>
      </Product>

      <Product>
        <div className="container-image">
          <img
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNFZ2E2HCN4wf9I07oS2f-qVH9ZZaHHY0CWenwMOMZzcfcgFVrhTCwhEx0frYkwDvUWLQuRwOMPw&usqp=CAc"
            alt="Tênis"
            className="image"
          />
        </div>
        <strong className="title">Tênis</strong>
        <span className="text">R$129,90</span>

        <button type="button" className="button">
          <div className="wrapper">
            <MdAddShoppingCart size={16} color="#FFFFFF" /> 3
          </div>

          <span className="text">Adicionar ao carrinho</span>
        </button>
      </Product>

      <Product>
        <div className="container-image">
          <img
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNFZ2E2HCN4wf9I07oS2f-qVH9ZZaHHY0CWenwMOMZzcfcgFVrhTCwhEx0frYkwDvUWLQuRwOMPw&usqp=CAc"
            alt="Tênis"
            className="image"
          />
        </div>
        <strong className="title">Tênis</strong>
        <span className="text">R$129,90</span>

        <button type="button" className="button">
          <div className="wrapper">
            <MdAddShoppingCart size={18} color="#FFFFFF" />{' '}
            <span className="itens">3</span>
          </div>

          <span className="text">Adicionar ao carrinho</span>
        </button>
      </Product>
    </ProductList>
  );
};

export default Home;
