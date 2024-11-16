import { MainText, SecondaryText, Shape, TextBox, TopSectionBox } from './TopSection.styled'

export default function TopSection() {
  return (
    <TopSectionBox>
      <TextBox>
        <MainText>Банкротство физических лиц</MainText>
        <hr />
        <SecondaryText>Банкротство – это законная и легальная процедура, основанная на ФЗ 127 «О несостоятельности (банкротстве)», поэтому она подходит всем категориям граждан</SecondaryText>
      </TextBox>
      <Shape />
    </TopSectionBox>
  )
}