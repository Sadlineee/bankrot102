'use client'

import { CompanyInfo, Crew, Footer, Header, Review, TopSection } from '@/components'
import { DashedLine, HomeBox } from './Home.styled'

export default function Home() {
  return (
    <>
      <Header />
      <HomeBox>
        <TopSection />
        <DashedLine />
        <CompanyInfo />
        <DashedLine />
        <Crew />
        <DashedLine />
        <Review />
        <DashedLine />
      </HomeBox>
      <Footer />
    </>
  )
}