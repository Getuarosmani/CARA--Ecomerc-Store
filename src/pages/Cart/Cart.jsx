import React, { useContext, useState } from 'react';
import style from './Cart.module.scss';
import { Layout } from '../../components/Layout/Layout';
import { Banner } from '../../components/Banner/Banner';
import { CartRow } from '../../components/Cart-Row/CartRow';
import { CartContext } from '../../Context/CartContex';

import '../../styles/animations.scss';

export const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState('');
  const [shake, setShake] = useState(false);

  const cartSubtotal = cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
  const shipping = cartSubtotal === 0 ? 0 : cartSubtotal > 100 ? 0 : 25;
  const total = cartSubtotal + shipping - discount;

  const applyCoupon = () => {
    if (coupon.toLowerCase() === 'sale') {
      setDiscount(20);
      setMessage('Coupon applied! $20 discount.');
      setCoupon('');
    } else if(!coupon){
      setMessage('apply a code before submiting.')
    }else {
      setDiscount(0);
      setMessage('Invalid coupon.');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }

    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className={style.cart}>
      <Layout>
        <Banner
          bgImage="/images/banner/banner.png"
          title="Cart"
          subTitle="Add your coupon code & SAVE upto 70%!"
        />

        <div className="container">
          <div className={style['table-holder']}>
            <table>
              <thead>
                <tr>
                  <td>Remove</td>
                  <td>Image</td>
                  <td>Product</td>
                  <td>Size</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '100px 0' }}>
                      Your cart is empty!!
                    </td>
                  </tr>
                ) : (
                  cartItems.map((item) => <CartRow key={item.id} product={item} />)
                )}
              </tbody>
            </table>
          </div>

          <div className={style['bottom-cart-section']}>
            <div className={style['coupon-section']}>
              <h3>Apply Coupon</h3>
              <input
                type="text"
                className={shake ? 'shake' : ''}
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
              />
              <button onClick={applyCoupon}>Apply</button>
              {message && <p style={{ color: discount > 0 ? 'green' : 'red', fontWeight: 'bold', marginTop: '10px' }}>
                {message}
              </p>}
            </div>

            <div className={style['cart-total']}>
              <h3>Cart Totals</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td>${cartSubtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>{shipping === 0 ? '$0.00' : `$${shipping.toFixed(2)}`}</td>
                  </tr>
                  <tr>
                    <td>Discount</td>
                    <td>${discount > 0 ? `${discount.toFixed(2)}` : '0'}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>${total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <button>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
