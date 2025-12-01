import React, { useContext, useState, useMemo } from 'react';
import { CartContext } from '../../Context/CartContex';
import { useParams } from 'react-router-dom';
import { products } from '../../Data/Data';
import style from './ProductDetalis.module.scss';
import { Layout } from '../../components/Layout/Layout';
import { Title } from '../../components/Title/Title';
import { CardSection } from '../../components/Card-Section/CardSection';

export const ProductDetalis = () => {
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [shake, setShake] = useState(false);

  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const randomProducts = useMemo(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, [id]);

  const handleAddToCart = () => {
    if (!size) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    addToCart({
      id: product.id + "-" + size,
      name: product.name,
      price: product.price,
      img: product.image,
      size: size,
      quantity: quantity
    });

    setSize("");       
    setQuantity(1);  
  };

  return (
    <Layout>
      <section className={style['product-page']}>
        <div className={`container ${style.container}`}>
          <div className={style.left}>
            <div className={style['img-holder']}>
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          <div className={style.right}>
            <p>Home / T-Shirt</p>
            <h3>{product.name}</h3>
            <span>${product.price}</span>

            <select
              value={size}
              className={shake ? style.shake : ''}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">Select Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>

            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />

            <button onClick={handleAddToCart}>Add To Cart</button>

            <h3>Product Details</h3>
            <p>{product.details}</p>
          </div>
        </div>

        <Title title={'Featured Products'} subTitle={'Summer Collection New Modern Design'} />
        <CardSection items={randomProducts} />
      </section>
    </Layout>
  );
};
