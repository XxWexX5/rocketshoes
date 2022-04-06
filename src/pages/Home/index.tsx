/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

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
}

const Home = () => {
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

  console.log(dataApi);

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

              <button type="button" className="button">
                <div className="wrapper">
                  <MdAddShoppingCart size={16} color="#FFFFFF" /> 3
                </div>

                <span className="text">Adicionar ao carrinho</span>
              </button>
            </Product>
          );
        })}
    </ProductList>
  );
};

export default Home;
