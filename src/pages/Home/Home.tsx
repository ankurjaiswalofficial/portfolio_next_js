import Section from '@/components/Section'
import React from 'react'
import HomeContent from './HomeContent'
import SocialLinks from '@/components/SocialLinks'

function Home() {
  return (
    <Section title={""} description={""} imgSrc={"/img/img1.png"} reverse footerChildren={<SocialLinks />}>
        <HomeContent />
    </Section>
  )
}

export default Home
