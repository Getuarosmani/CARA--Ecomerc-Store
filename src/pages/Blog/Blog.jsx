import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import { Banner } from '../../components/Banner/Banner'
import { Newsleatter } from '../../components/Newsletter/Newsleatter'
import { BlogPost } from '../../components/Blog-Post/BlogPost'
export const Blog = () => {
  return (
    <Layout>
      <Banner bgImage={'./public/images/banner/b19.jpg'} title={'readmore'} subTitle={'Read all case studies about our products!'} className={'special'} />
      <BlogPost
        img={'images/blog/b1.jpg'}
        title={'The Cotton-Jersey Zip-Up Hoodie'}
        text={'In today’s fast-paced world, finding balance and maintaining wellness can feel like an impossible task. From mindfulness practices to productivity hacks, small daily habits can transform your physical health, mental clarity, and emotional resilience. Exploring creative outlets, setting realistic goals, and prioritizing self-care can help you lead a more fulfilling and joyful life. Discover practical tips to make every day healthier, happier, and more purposeful.'}
        date={'13/01'}
      />
      <BlogPost
        img={'images/blog/b2.jpg'}
        title={'The Cotton-Jersey Zip-Up Hoodie'}
        text={'In today’s fast-paced world, finding balance and maintaining wellness can feel like an impossible task. From mindfulness practices to productivity hacks, small daily habits can transform your physical health, mental clarity, and emotional resilience. Exploring creative outlets, setting realistic goals, and prioritizing self-care can help you lead a more fulfilling and joyful life. Discover practical tips to make every day healthier, happier, and more purposeful.'}
        date={'21/02'}
      />
      <BlogPost
        img={'images/blog/b3.jpg'}
        title={'The Cotton-Jersey Zip-Up Hoodie'}
        text={'In today’s fast-paced world, finding balance and maintaining wellness can feel like an impossible task. From mindfulness practices to productivity hacks, small daily habits can transform your physical health, mental clarity, and emotional resilience. Exploring creative outlets, setting realistic goals, and prioritizing self-care can help you lead a more fulfilling and joyful life. Discover practical tips to make every day healthier, happier, and more purposeful.'}
        date={'10/06'}
      />
      <BlogPost
        img={'images/blog/b4.jpg'}
        title={'The Cotton-Jersey Zip-Up Hoodie'}
        text={'In today’s fast-paced world, finding balance and maintaining wellness can feel like an impossible task. From mindfulness practices to productivity hacks, small daily habits can transform your physical health, mental clarity, and emotional resilience. Exploring creative outlets, setting realistic goals, and prioritizing self-care can help you lead a more fulfilling and joyful life. Discover practical tips to make every day healthier, happier, and more purposeful.'}
        date={'02/09'}
        backgrounPposition={'top'}
      />
      <BlogPost
        img={'images/blog/b6.jpg'}
        title={'The Cotton-Jersey Zip-Up Hoodie'}
        text={'In today’s fast-paced world, finding balance and maintaining wellness can feel like an impossible task. From mindfulness practices to productivity hacks, small daily habits can transform your physical health, mental clarity, and emotional resilience. Exploring creative outlets, setting realistic goals, and prioritizing self-care can help you lead a more fulfilling and joyful life. Discover practical tips to make every day healthier, happier, and more purposeful.'}
        date={'09/11'}
      />


      <Newsleatter />
    </Layout>
  )
}
