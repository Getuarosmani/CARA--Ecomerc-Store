import React from 'react'
import style from './Banner.module.scss'

export const Banner = ({ bgImage, title, subTitle, className }) => {
  return (
    <section className={`${style.banner} ${className ? style[className] : ''}`}
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${bgImage})` }}>
      <div className={`container ${style.container}`}>
        <h2>#{title}</h2>
        <p>{subTitle}</p>
      </div>
    </section>
  )
}
