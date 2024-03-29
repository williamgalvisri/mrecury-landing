/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBarComponent from '@/components/navbar/navbar'
import HomeComponent from '@/components/home/home'
import CharacteristicsComponent from '@/components/characteristic/characteristic'
import ProductsComponent from '@/components/products/product'
import RealSpaceComponent from '@/components/real-space/real-space'
import CallToActionComponent from '@/components/call-to-action/call-to-action'
import FooterComponent from '@/components/footer/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>MercuryInc</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{display: 'flex', flexFlow:'column'}}>
        <NavBarComponent />
        <HomeComponent /> 
        <CharacteristicsComponent />
        <ProductsComponent />
        <RealSpaceComponent />
        <CallToActionComponent />
        <FooterComponent />
      </main>
    </>
  )
}
