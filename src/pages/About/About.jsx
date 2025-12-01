import React from 'react'
import style from './About.module.scss'
import { Layout } from '../../components/Layout/Layout'
import { Banner } from '../../components/Banner/Banner'
import { Newsleatter } from '../../components/Newsletter/Newsleatter'
import { ServiceSection } from '../../components/Service-Section/ServiceSection'


export const About = () => {
  return (
    <div className={style.about}>
      <Layout>
        <Banner bgImage={'images/banner/banner.png'} title={'KnowUs'} subTitle={'Learn More About Us'} />
        <div className={`container`}>
          <div className={style['first-section']}>
            <div className={style.left}>
              <img src="images/about/a6.jpg" alt="" />
            </div>
            <div className={style.right}>
              <h2>Who We are?</h2>
              <p>We are more than just an e-commerce destination; we are a team of passionate individuals dedicated to bringing you thoughtfully curated, high-quality products that enhance your everyday life. Founded on the belief that you deserve both exceptional value and an effortless shopping experience, we meticulously source each item and stand behind its quality. Our commitment extends beyond the "add to cart" button—we pride ourselves on providing outstanding customer service and building a community of happy, loyal customers. Thank you for choosing us to be a part of your story.</p>
              <marquee behavior="" direction="">Thank you for choosing us to be a part of your story.</marquee>
            </div>
          </div>
          <h2 className={style['video-title']}>Download Our <span>App</span></h2>
          <div className={style['video-holder']}>
            <video
              src="images/about/1.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>

          </div>
        </div>
        <ServiceSection />
        <Newsleatter />
      </Layout>
    </div>
  )
}
