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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-color: #007bff;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  i {
    font-size: 1.5rem;
    min-width: 2rem;
    text-align: center;
  }
`

const ContactContent = styled.div`
  flex: 1;
`

const ContactLabel = styled.strong`
  color: #333;
  font-weight: 600;
  display: block;
  margin-bottom: 0.25rem;
`

const ContactValue = styled.span`
  color: #666;
  font-weight: 400;
  word-break: break-all;
`

const ContactInfo = () => {
  const contacts = [
    { icon: "📧", label: "Correo", value: "andreygota27@gmail.com" },
    { icon: "📱", label: "Teléfono", value: "+57 324 460 0982" },
    { icon: "📸", label: "Instagram", value: "instagram.com/444._andreyy" },
    { icon: "📘", label: "Facebook", value: "facebook.com/AndreyGomez" },
    { icon: "💻", label: "GitHub", value: "github.com/AndreyGomez-2708" },
  ]

  return (
    <Section>
      <Container>
        <SectionTitle>Contacto</SectionTitle>
        <ContactGrid>
          {contacts.map((contact, index) => (
            <Card key={index}>
              <Row>
                <i>{contact.icon}</i>
                <ContactContent>
                  <ContactLabel>{contact.label}</ContactLabel>
                  <ContactValue>{contact.value}</ContactValue>
                </ContactContent>
              </Row>
            </Card>
          ))}
        </ContactGrid>
      </Container>
    </Section>
  )
}

export default ContactInfo
