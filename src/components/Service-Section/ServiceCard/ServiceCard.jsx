import React from 'react'
import style from './ServiceCard.module.scss'

export const ServiceCard = ({ images, background, text }) => {
    return (
        <div className={style.card}>
            <div className={style['img-holder']}>
                <img src={`/images/features/${images}`} alt="" />
            </div>
            <div className={style.textbox} style={{ backgroundColor: `var(${background})` }}>
                <p>{text}</p>
            </div>
        </div>
    )
}
