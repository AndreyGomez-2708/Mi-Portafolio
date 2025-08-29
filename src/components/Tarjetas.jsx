import styled from "styled-components"
import Section from "./Section"

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  font-weight: 700;
  color: #333;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const Card = styled.div`
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 2rem;
  min-height: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-color: #007bff;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 1rem;
    padding: 0.5rem 0;
    color: #333;
    font-weight: 500;
    border-bottom: 1px solid #e9ecef;
    transition: color 0.3s ease;
    
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
    
    &:hover {
      color: #007bff;
    }
    
    &::before {
      content: '•';
      color: #007bff;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`

const Tarjetas = () => {
  return (
    <Section border>
      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>Hobbies</SectionTitle>
          <SectionTitle>Gustos</SectionTitle>
          <SectionTitle>Reconocimientos</SectionTitle>
        </HeaderContainer>

        <CardsContainer>
          <Card>
            <ul>
              <li>Videojuegos</li>
              <li>Anime</li>
              <li>Instrumentos</li>
              <li>Libros</li>
              <li>Música</li>
            </ul>
          </Card>

          <Card>
            <ul>
              <li>Programación</li>
              <li>Diseño web</li>
              <li>Desarrollo Web</li>
              <li>Desarrollo de Bases de Datos</li>
            </ul>
          </Card>

          <Card>
            <ul>
              <li>Líder Estudiantil</li>
              <li>Premio a la excelencia académica</li>
              <li>Participación en Olimpiadas saber</li>
              <li>Reconocimiento al mejor del grado</li>
            </ul>
          </Card>
        </CardsContainer>
      </SectionContainer>
    </Section>
  )
}

export default Tarjetas
