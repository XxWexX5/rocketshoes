import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { ContainerCart, ProductTable, Product, Footer, Total } from './styles';

import * as CartActions from '../../store/modules/cart/actions';
interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  priceFormated: string;
  amount: number;
}

export const Cart = ({ products, dispatch, removeCart }: any) => {
  const handleDeleteFromCart = (productId: any) => {
    dispatch(removeCart(productId));
  };

  return (
    <ContainerCart>
      <ProductTable>
        <thead className="head">
          <tr className="row">
            <th className="column" />
            <th className="column">Produto</th>
            <th className="column column-qtd">Qtd</th>
            <th className="column">Subtotal</th>
            <th className="column" />
          </tr>
        </thead>

        <tbody className="body">
          {products.map((product: Product) => (
            <Product key={product.id} className="row">
              <td className="column">
                <img src={product.image} alt="Tênis" className="image" />
              </td>
              <td className="column">
                <strong className="title">{product.title}</strong>
                <span className="text">{product.priceFormated}</span>
              </td>
              <td className="column">
                <div className="wrapper-qtd">
                  <button type="button" className="button">
                    <MdRemoveCircleOutline size={20} color="#7159C1" />
                  </button>

                  <input
                    type="number"
                    readOnly
                    value={product.amount}
                    className="input"
                  />

                  <button type="button" className="button">
                    <MdAddCircleOutline size={20} color="#7159C1" />
                  </button>
                </div>
              </td>
              <td className="column">
                <strong className="subtotal">R$258,80</strong>
              </td>
              <td className="column">
                <button
                  type="button"
                  className="button"
                  onClick={() => handleDeleteFromCart(product.id)}
                >
                  <MdDelete size={20} color="#7159C1" />
                </button>
              </td>
            </Product>
          ))}
        </tbody>
      </ProductTable>

      <Footer>
        <button type="button" className="button">
          Finalizar pedido
        </button>

        <Total>
          <span className="title">TOTAL</span>
          <strong className="text">R$1920,28</strong>
        </Total>
      </Footer>
    </ContainerCart>
  );
};

const mapStateToProps = (state: any) => ({
  products: state.cart,
});

const mapDispatchToPros = (dispatch: any) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToPros)(Cart);
