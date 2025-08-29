import styled from "styled-components"

const StyledSection = styled.section`
  padding: 4rem 0;
  
  ${(props) =>
    props.border &&
    `
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  `}
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const Section = ({ children, border, ...props }) => {
  return (
    <StyledSection border={border} {...props}>
      {children}
    </StyledSection>
  )
}

export default Section
