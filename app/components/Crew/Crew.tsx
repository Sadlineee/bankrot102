import { EmployeeProps } from '@/types/EmployeeProps'
import { CrewBox, EmployeeCard, EmployeeContent, EmployeeDataBox, EmployeeName, EmployeePhoto } from './Crew.styled'

const EmployeeData: EmployeeProps[] = [
  {
    id: 1,
    photo: '',
    name: 'Jane Do',
    role: 'CEO, Lawyer',
    experience: 'Work experience since 2016'
  },

  {
    id: 2,
    photo: '',
    name: 'Lucifer Co',
    role: 'Helper',
    experience: 'Work experience since 2020'
  },

  {
    id: 3,
    photo: '',
    name: 'Maria Do',
    role: 'Developer',
    experience: 'Work experience since 2010'
  },

  {
    id: 4,
    photo: '',
    name: 'John Ly',
    role: 'Lawyer',
    experience: 'Work experience since 2020'
  }
]

export default function Crew() {
  return (
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
  )
}