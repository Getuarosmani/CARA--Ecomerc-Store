import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContex';
import style from './CartRow.module.scss';

export const CartRow = ({ product }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <tr>
      <td onClick={() => removeFromCart(product.id)}>
        <i className="fa-regular fa-circle-xmark"></i>
      </td>
      <td>
        <div className={style['img-holder']}>
          <img src={product.img} alt={product.name} />
        </div>
      </td>
      <td>{product.name}</td>
      <td>{product.size}</td>
      <td>${product.price}</td>
      <td>
        <input
          type="number"
          min={1}
          value={product.quantity}
          onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
        />
      </td>
      <td>${(product.price * product.quantity).toFixed(2)}</td>
    </tr>
  );
};
