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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 2rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: #007bff;
  }
`

const CardTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
`

const CardDescription = styled.p`
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  color: #666;
`

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 2px solid #007bff;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #007bff;
    color: white;
    transform: translateX(2px);
  }
`

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Inventarios",
      description: "Aplicación web para gestionar productos, clientes y ventas, desarrollada con Java y MySQL.",
      link: "#",
    },
    {
      title: "Portafolio Personal",
      description: "Sitio web responsive hecho con React y styled-components.",
      link: "#",
    },
    {
      title: "Página de Negocio Local",
      description: "Landing page para un negocio pequeño, utilizando HTML, CSS y JavaScript.",
      link: "#",
    },
  ]

  return (
    <Section id="projects">
      <Container>
        <SectionTitle>Proyectos</SectionTitle>
        <Grid>
          {projects.map((project, index) => (
            <Card key={index}>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <CardLink href={project.link} target="_blank" rel="noopener noreferrer">
                Ver proyecto →
              </CardLink>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default Projects
