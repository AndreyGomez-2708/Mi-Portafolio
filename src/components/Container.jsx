import styled from "styled-components"

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}

export default Container
