import { CompanyInfoProps } from '@/types/CompanyInfoProps'
import { CompanyInfoBox, CompanyInfoEl, InfoContent, InfoTitle } from './CompanyInfo.styled'

const CompanyInfoData: CompanyInfoProps[] = [
  {
    id: 1,
    title: 'Адрес',
    content: 'г. Уфа ул. 50 лет СССР, 29'
  },

  {
    id: 2,
    title: 'Часы работы',
    content: 'пн-пт 10:00 - 18:00'
  },

  {
    id: 3,
    title: 'Телефон',
    content: '+7 999 000 222'
  },

  {
    id: 4,
    title: 'Почта',
    content: '2668809@mail.ru'
  }
]

export default function CompanyInfo() {
  return (
    <CompanyInfoBox>
      {CompanyInfoData.map((el) => (
        <CompanyInfoEl key={el.id}>
          <InfoTitle>{el.title}</InfoTitle>
          <hr />
          <InfoContent>{el.content}</InfoContent>
        </CompanyInfoEl>
      ))}
    </CompanyInfoBox>
  )
}