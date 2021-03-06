import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
`

export const FlexWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SecondaryTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
`

export const TertiaryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
`

export const Highlight = styled.span`
  color: var(--clr-accent);
  font-weight: 900;
  font-size: 1.5rem;
`
