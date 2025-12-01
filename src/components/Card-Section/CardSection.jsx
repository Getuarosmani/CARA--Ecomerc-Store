import React from 'react'
import style from './CardSection.module.scss'
import { Card } from '../Shop-Card/Card'
import { products } from '../../Data/Data'

export const CardSection = ({ type, items }) => {

    const filterdProducts = items ? items :
        type ?
            products.filter((p) => p.type === type) :
            products;

            
    return (
        <section className={style['card-holder']}>
            <div className={`container ${style.container}`}>
                {filterdProducts.map((item) => (<Card
                    key={item.id}
                    id={item.id}
                    brand={item.brand}
                    img={item.image}
                    productName={item.name}
                    review={item.rating}
                    price={item.price}
                />))}

            </div>
        </section>
    )
}
