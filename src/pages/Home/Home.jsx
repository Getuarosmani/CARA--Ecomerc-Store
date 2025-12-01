import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import style from './Home.module.scss'
import { ServiceSection } from '../../components/Service-Section/ServiceSection'
import { Title } from '../../components/Title/Title'
import { CardSection } from '../../components/Card-Section/CardSection'
import { Newsleatter } from '../../components/Newsletter/Newsleatter'

export const Home = () => {
  return (
    <Layout>
      <div className={style.home}>
        <section className={style.hero}>
          <div className={`container  ${style.container}`}>
            <div className={style.text}>
              <h3>Trade-in-offer</h3>
              <h1>Super value deals <span><br />On all products</span></h1>
              <p>Save more with coupons & up to 70%off!</p>
              <div className={style.button}>
                <img src="/images/button.png" alt="button-desing" />
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </section>

        <ServiceSection />

        <Title title='Featured Products' subTitle='Summer Collection New Modern Desing' />

        <CardSection type={'featured'} />

        <section className={style['sale-banner']}>
          <div className="container">
            <p>Repair Service</p>
            <h2>Up to <span>70% Off</span> - All t-Shirts  Accessories</h2>
            <button>Explore More</button>
          </div>
        </section>

        <Title title='New Arrivals' subTitle='Summer Collection New Modern Desing' />

        <CardSection type={'new'} />

        <section className={style.banners}>
          <div className='container'>
            <div className={style['big-banners']}>
              <div className={style['b1-banner']}>
                <span>crayzy deals</span>
                <h3>bay 1 get 1 free</h3>
                <p>The best classics is on sale at cara</p>
                <button>Learn More</button>
              </div>
              <div className={style['b2-banner']}>
                <span>spring/summer</span>
                <h3>upcoming season</h3>
                <p>The best classics is on sale at car</p>
                <button>Collection</button>
              </div>
            </div>
            <div className={style['small-banners']}>
              <div className={style['s1-banner']}>
                <h3>SEASONAL SALE</h3>
                <span>Summer Collection -50% OFF</span>
              </div>
              <div className={style['s2-banner']}>
                <h3>NEW JACKETS COLLECTION</h3>
                <span>Autumn / Winter</span>
              </div>
              <div className={style['s3-banner']}>
                <h3>DRESSES</h3>
                <span>New Trendy Dresses</span>
              </div>
            </div>
          </div>
        </section>

        <Newsleatter/>
      </div>
    </Layout>
  )
}
