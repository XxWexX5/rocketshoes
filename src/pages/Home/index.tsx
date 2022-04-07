/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList, Product } from './styles';

import api from '../../services/api';

import { formatPrice } from '../../utils/format';
interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  priceFormated: string;
  amount: number;
}

const Home = ({ dispatch, productsTotal }: any) => {
  const [dataApi, setDataApi] = useState([]);

  const getProducts = async () => {
    let { data } = await api.get('/products');

    data = data.map((product: Product) => {
      return { ...product, priceFormated: formatPrice(product.price) };
    });

    setDataApi(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddToCart = (product: any) => {
    return dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  return (
    <ProductList>
      {dataApi &&
        dataApi.map((product: Product) => {
          return (
            <Product key={product.id}>
              <div className="container-image">
                <img src={product.image} alt="Tênis" className="image" />
              </div>
              <strong className="title">{product.title}</strong>
              <span className="text">{product.priceFormated}</span>

              <button
                type="button"
                className="button"
                onClick={() => handleAddToCart(product)}
              >
                <div className="wrapper">
                  <MdAddShoppingCart size={16} color="#FFFFFF" />{' '}
                  {productsTotal}
                </div>

                <span className="text">Adicionar ao carrinho</span>
              </button>
            </Product>
          );
        })}
    </ProductList>
  );
};

export default connect((state: any) => ({
  productsTotal: state.cart.length,
}))(Home);
