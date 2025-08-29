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

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #ddd;
    
    @media (max-width: 768px) {
      left: 1rem;
    }
  }
`

const Item = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 5rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 1.25rem;
    top: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    background: #007bff;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 0 3px #007bff;
  }
  
  @media (max-width: 768px) {
    padding-left: 3rem;
    
    &::before {
      left: 0.25rem;
      width: 1rem;
      height: 1rem;
    }
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

const ItemTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
`

const ItemCompany = styled.h4`
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: #666;
`

const Badge = styled.span`
  background: #007bff;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
`

const ItemDescription = styled.p`
  margin: 0;
  line-height: 1.6;
  color: #666;
`

const Experience = () => {
  const experiences = [
    {
      role: "Prácticas en desarrollo de software",
      company: "Empresa local de tecnología",
      period: "2024",
      description:
        "Apoyo en el desarrollo de aplicaciones web usando HTML, CSS, JavaScript y bases de datos relacionales.",
    },
    {
      role: "Proyecto académico",
      company: "Institución educativa",
      period: "2023",
      description:
        "Desarrollo de un sistema de gestión de inventarios como trabajo final de grado, aplicando programación orientada a objetos y SQL.",
    },
    {
      role: "Colaborador en proyectos freelance",
      company: "Independiente",
      period: "2023 - 2024",
      description:
        "Creación de páginas web básicas para pequeños negocios, integrando buenas prácticas de código y control de versiones con GitHub.",
    },
    {
      role: "Participación en semillero de programación",
      company: "Semillero universitario",
      period: "2022 - 2023",
      description:
        "Colaboración en proyectos colaborativos, resolución de problemas algorítmicos y aprendizaje de metodologías ágiles.",
    },
    {
      role: "Repartidor de productos",
      company: "Alpina y Parmalat",
      period: "2024 - 2025",
      description: "Colaboración en la distribución de los productos que producen dichas empresas.",
    },
  ]

  return (
    <Section>
      <Container>
        <SectionTitle>EXPERIENCIA</SectionTitle>
        <Timeline>
          {experiences.map((exp, index) => (
            <Item key={index}>
              <ItemHeader>
                <div>
                  <ItemTitle>{exp.role}</ItemTitle>
                  <ItemCompany>{exp.company}</ItemCompany>
                </div>
                <Badge>{exp.period}</Badge>
              </ItemHeader>
              <ItemDescription>{exp.description}</ItemDescription>
            </Item>
          ))}
        </Timeline>
      </Container>
    </Section>
  )
}

export default Experience
