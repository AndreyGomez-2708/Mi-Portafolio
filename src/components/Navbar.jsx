import styled from "styled-components"
import Container from "./Container"

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(90deg, #007bff, #0056b3);
  color: white;
  padding: 1rem 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const Logo = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
    }
    
    @media (max-width: 768px) {
      padding: 0.25rem 0.5rem;
      font-size: 0.9rem;
    }
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <NavContent>
          <Logo>Andrey Gómez</Logo>
          <NavLinks>
            <NavItem>
              <a href="#inicio">Inicio</a>
            </NavItem>
            <NavItem>
              <a href="#skills">Habilidades</a>
            </NavItem>
            <NavItem>
              <a href="#experience">Experiencia</a>
            </NavItem>
            <NavItem>
              <a href="#projects">Proyectos</a>
            </NavItem>
            <NavItem>
              <a href="#contact">Contacto</a>
            </NavItem>
          </NavLinks>
        </NavContent>
      </Container>
    </Nav>
  )
}

export default Navbar
