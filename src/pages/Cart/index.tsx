import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { ContainerCart, ProductTable, Product, Footer, Total } from './styles';
interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  priceFormated: string;
  amount: number;
}

export const Cart = ({ products }: any) => (
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
              <button type="button" className="button">
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

const mapStateToProps = (state: any) => ({
  products: state.cart,
});

export default connect(mapStateToProps)(Cart);
