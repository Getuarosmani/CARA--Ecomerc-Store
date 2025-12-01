import React from 'react'
import style from './Title.module.scss'

export const Title = ({title, subTitle}) => {
  return (
    <section className={style.title}>
        <div className="container">
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </div>
    </section>
  )
}
