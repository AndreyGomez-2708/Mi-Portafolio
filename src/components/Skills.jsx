import styled from "styled-components"
import Container from "./Container"
import Section from "./Section"

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const SkillsContainer = styled.div`
  margin-bottom: 4rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
  font-weight: 500;
  color: #333;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #007bff;
    color: #007bff;
  }
`

const Skills = () => {
  const technicalSkills = [
    "Lógica de programación",
    "Estructuras de datos",
    "Desarrollo web (HTML, CSS, JavaScript)",
    "Programación orientada a objetos (Java / Python / C#)",
    "Bases de datos (MySQL / PostgreSQL)",
    "Versionamiento con Git y GitHub",
    "Resolución de problemas y algoritmos",
  ]

  const softSkills = [
    "Trabajo en equipo ágil (Scrum / Kanban)",
    "Comunicación efectiva",
    "Gestión del tiempo",
    "Pensamiento crítico",
    "Adaptabilidad",
    "Aprendizaje autónomo",
  ]

  return (
    <Section>
      <Container>
        <SkillsContainer>
          <SectionTitle>Habilidades Técnicas</SectionTitle>
          <Grid>
            {technicalSkills.map((skill, index) => (
              <Card key={index}>{skill}</Card>
            ))}
          </Grid>
        </SkillsContainer>

        <SkillsContainer>
          <SectionTitle>Habilidades Blandas</SectionTitle>
          <Grid>
            {softSkills.map((skill, index) => (
              <Card key={index}>{skill}</Card>
            ))}
          </Grid>
        </SkillsContainer>
      </Container>
    </Section>
  )
}

export default Skills
