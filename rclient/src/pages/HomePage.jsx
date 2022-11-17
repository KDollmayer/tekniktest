import React from 'react'
import ProductCard from '../components/card'
import MainContainer from '../components/container'
import Header from '../components/header'
import HeroDiv from '../components/hero'
import InputSection from '../components/input'




export default function HomePage() {
  return (
    <MainContainer>
       <Header/>
       <HeroDiv>
          <InputSection/>
          <ProductCard/>
       </HeroDiv>
       
       
    </MainContainer>
  )
}
