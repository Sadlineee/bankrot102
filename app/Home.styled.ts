import styled from 'styled-components'

export const DashedLine = styled.hr`
  margin: 5rem 0;
  width: 100%;
  border: 1px dashed ${({ theme }) => theme.colors.white};
`

export const HomeBox = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15rem;
  animation: mount 0.75s ease-out;

  @keyframes mount {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }

  @media ${({ theme }) => theme.media.small} {
    padding: 0 1rem;
  }
`