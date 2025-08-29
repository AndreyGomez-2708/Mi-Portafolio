import styled from "styled-components"
import Container from "./Container"
import Section from "./Section"

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const EducationGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`

const Item = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

const ItemContent = styled.div`
  flex: 1;
`

const ItemTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
`

const Badge = styled.span`
  background: #28a745;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1rem;
`

const Period = styled.span`
  color: #666;
  font-weight: 500;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    align-self: flex-start;
  }
`

const Description = styled.p`
  margin: 1rem 0 0 0;
  line-height: 1.6;
  color: #666;
`

const Education = () => {
  return (
    <Section border={true}>
      <Container>
        <SectionTitle>EDUCACIÓN</SectionTitle>

        <EducationGrid>
          <Item>
            <ItemHeader>
              <ItemContent>
                <ItemTitle>Tecnico en Programación de Software</ItemTitle>
                <Badge>SENA</Badge>
              </ItemContent>
              <Period>ago. 2024 - dic. 2025</Period>
            </ItemHeader>
            <Description>Estudiante destacado por mi disciplina, liderazgo y sentido de pertenencia.</Description>
          </Item>

          <Item>
            <ItemHeader>
              <ItemContent>
                <ItemTitle>Tecnico en diseño Web</ItemTitle>
                <Badge>Institución Educativa Asamblea Departamental</Badge>
              </ItemContent>
              <Period>ene. 2024 - nov. 2025</Period>
            </ItemHeader>
          </Item>
        </EducationGrid>
      </Container>
    </Section>
  )
}

export default Education
