import { EmployeeProps } from '@/types/EmployeeProps'
import { CrewBox, CrewTitle, EmployeeCard, EmployeeContent, EmployeeDataBox, EmployeeName, EmployeePhoto } from './Crew.styled'

const EmployeeData: EmployeeProps[] = [
  {
    id: 1,
    photo: '',
    name: 'Джейн До',
    role: 'Директор',
    experience: 'Опыт работы 12 лет'
  },

  {
    id: 2,
    photo: '',
    name: 'Люцифер До',
    role: 'Специалист поддержки',
    experience: 'Опыт работы 4 года'
  },

  {
    id: 3,
    photo: '',
    name: 'Мария До',
    role: 'Разработчик',
    experience: 'Опыт работы 10 лет'
  },

  {
    id: 4,
    photo: '',
    name: 'Джон До',
    role: 'Юрист',
    experience: 'Опыт работы 10 лет'
  }
]

export default function Crew() {
  return (
    <>
      <CrewTitle>Наша команда</CrewTitle>
      <CrewBox>
        {EmployeeData.map((el) => (
          <EmployeeCard key={el.id}>
            <EmployeePhoto src={el.photo} alt={`${el.name}` + ' photo'} />
            <EmployeeDataBox>
              <EmployeeName>{el.name}</EmployeeName>
              <hr />
              <EmployeeContent>{el.role}</EmployeeContent>
              <EmployeeContent>{el.experience}</EmployeeContent>
            </EmployeeDataBox>
          </EmployeeCard>
        ))}
      </CrewBox>
    </>
  )
}