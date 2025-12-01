import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import { Banner } from '../../components/Banner/Banner'
import { CardSection } from '../../components/Card-Section/CardSection'
import { Newsleatter } from '../../components/Newsletter/Newsleatter'

export const Shop = () => {
  return (
    <Layout>
      <Banner bgImage={'./public/images/banner/b1.jpg'} title={'stayhome'} subTitle={'Save more with Coupons & up to 70% off!'}/>
      <CardSection />
      <Newsleatter/>
    </Layout>
  )
}
