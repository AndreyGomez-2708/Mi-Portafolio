import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar"
import Projects from "./components/projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Tarjetas from "./components/Tarjetas"
import ContactInfo from "./components/ContactInfo"
import Footer from "./components/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Tarjetas />
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}
