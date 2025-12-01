import React from 'react'
import style from './ServiceSection.module.scss';
import { ServiceCard } from './ServiceCard/ServiceCard';

export const ServiceSection = () => {
  return (
    <section className={style.services}>
      <div className={`container ${style.container}`}>

        <ServiceCard images='f1.png' background='--services-c1' text='Free Shipping' />
        <ServiceCard images='f2.png' background='--services-c2' text='Online Order' />
        <ServiceCard images='f3.png' background='--services-c3' text='Save Money' />
        <ServiceCard images='f4.png' background='--services-c4' text='Promotions' />
        <ServiceCard images='f5.png' background='--services-c5' text='Happy Sell' />
        <ServiceCard images='f6.png' background='--services-c6' text='24 Support' />

      </div>
    </section>
  )
}
