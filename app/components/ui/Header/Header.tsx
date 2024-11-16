import React from 'react'
import { oxanium } from '@/fonts/fonts'
import { HeaderBox, AppTitle, SocialMedia, PhoneNumber, TelegramLink, InstagramLink, WhatsappLink, VkLink } from './Header.styled'

export default function Header() {
  return (
    <HeaderBox>
      <AppTitle className={oxanium.className}>Bankrot<span style={{ color: 'white' }}>102</span></AppTitle>
      <SocialMedia>
        <PhoneNumber>+7 999 000 222</PhoneNumber>
        <TelegramLink />
        <InstagramLink />
        <WhatsappLink />
        <VkLink />
      </SocialMedia>
    </HeaderBox>
  )
}