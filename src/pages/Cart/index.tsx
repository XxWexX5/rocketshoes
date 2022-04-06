import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { ContainerCart, ProductTable, Product, Footer, Total } from './styles';

export const Cart = () => (
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
        <Product className="row">
          <td className="column">
            <img
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNFZ2E2HCN4wf9I07oS2f-qVH9ZZaHHY0CWenwMOMZzcfcgFVrhTCwhEx0frYkwDvUWLQuRwOMPw&usqp=CAc"
              alt="Tênis"
              className="image"
            />
          </td>
          <td className="column">
            <strong className="title">Tênis</strong>
            <span className="text">R$129,90</span>
          </td>
          <td className="column">
            <div className="wrapper-qtd">
              <button type="button" className="button">
                <MdRemoveCircleOutline size={20} color="#7159C1" />
              </button>

              <input type="number" readOnly value={1} className="input" />

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

export default Cart;
