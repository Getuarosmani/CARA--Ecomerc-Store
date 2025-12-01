import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContex'
import { Link } from "react-router-dom";
import style from './Card.module.scss'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


export const Card = ({ id, brand, img, productName, review, price }) => {

    const stars = [1, 2, 3, 4, 5];

    const { addToCart } = useContext(CartContext);

    return (
        <div className={style.card}>
            <Link to={`/product/${id}`}>
                <div className={style['img-holder']}>
                    <img src={`${import.meta.env.BASE_URL}${img}`} alt={productName} />
                </div>
                <p>{brand}</p>
                <h4>{productName}</h4>
                <div className={style.review}>
                    {stars.map((star) => (
                        <span key={star}>
                            {review >= star ? (<FaStar />) : review >= star - 0.5 ? (<FaStarHalfAlt />) : (<FaRegStar />)}
                        </span>
                    ))}
                </div>
                <span className={style.price}>${price}</span>
            </Link>
            {/* <button onClick={() => addToCart({
                id,
                name: productName,
                price,
                img,
                quantity: 1
            })}>
                <i className="fa-solid fa-cart-shopping"></i></button> */}
        </div>
    )
}
