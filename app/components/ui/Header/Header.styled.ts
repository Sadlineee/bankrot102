import styled from 'styled-components'
import { FaInstagram, FaTelegram, FaVk, FaWhatsapp } from 'react-icons/fa6'

export const HeaderBox = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15rem;
  height: 5rem;

  @media ${({ theme }) => theme.media.small} {
    padding: 0 1rem;
  }
`

export const AppTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`

export const PhoneNumber = styled.span`
  margin-right: 2rem;
  font-size: 1.15rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media.small} {
    display: none;
  }
`

export const TelegramLink = styled(FaTelegram)`
  font-size: 1.75rem;
  color: #47A6FF;
`

export const InstagramLink = styled(FaInstagram)`
  font-size: 1.75rem;
  color: #FF3985;
`

export const WhatsappLink = styled(FaWhatsapp)`
  font-size: 1.75rem;
  color: #32FF8E;
`

export const VkLink = styled(FaVk)`
  font-size: 1.75rem;
  color: #3cA1FF;
`