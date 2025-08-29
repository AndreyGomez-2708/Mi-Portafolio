import styled from "styled-components"
import Container from "./Container"

const Foot = styled.footer`
  padding: 3rem 0 2rem;
  border-top: 1px solid #ddd;
  margin-top: 4rem;
  background: #f8f9fa;
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }
`

const Links = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    
    &:hover {
      background: #007bff;
      color: white;
      transform: translateY(-1px);
    }
  }
`

const Social = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: white;
    border: 2px solid #ddd;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: #007bff;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
    }
    
    i {
      font-size: 1.25rem;
      color: #333;
    }
  }
`

const Copyright = styled.p`
  margin: 0;
  padding-top: 2rem;
  border-top: 1px solid #ddd;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
`

const Footer = () => {
  return (
    <Foot>
      <Container>
        <FooterContent>
          <Links>
            <a href="#about">Sobre mí</a>
            <a href="#contact">Contáctame</a>
            <a href="#projects">Proyectos</a>
          </Links>

          <Social>
            <a href="https://facebook.com/AndreyGomez" target="_blank" rel="noopener noreferrer">
              <i className="icon ion-social-facebook" />
            </a>
            <a href="https://instagram.com/444._andreyy" target="_blank" rel="noopener noreferrer">
              <i className="icon ion-social-instagram-outline" />
            </a>
            <a href="https://github.com/AndreyGomez-2708" target="_blank" rel="noopener noreferrer">
              <i className="icon ion-social-github" />
            </a>
          </Social>
        </FooterContent>

        <Copyright>© {new Date().getFullYear()} Andrey Gómez. Todos los derechos reservados.</Copyright>
      </Container>
    </Foot>
  )
}

export default Footer
