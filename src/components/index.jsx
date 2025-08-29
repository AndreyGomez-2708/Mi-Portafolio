import HomeIntro from "./HomeIntro";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import ContactInfo from "./ContactInfo";
import Hobbies from "./Hobbies";
import Projects from "./projects";

const Home = () => {
  return (
    <>
      <HomeIntro />
      <Experience />
      <Education />
      <Skills />
      <Projects/>
      <ContactInfo />
      <Hobbies />
    </>
  );
};

export default Home;
