
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage.tsx";
import About from "./About.tsx";
import Projects from "./Project.tsx";
function App() {
  return (
    <>
      <ul>
        <a href="./about">
          <li>About</li>{" "}
        </a>
        <a href="./projects">
          <li>Projects</li>
        </a>
      </ul>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        
      </Routes>

      <section className="socials">
        <a target="_blank" href="https://github.com/codercihat"> <li>
          <BsGithub />{" "}
        </li>{" "}</a>
        |||
        <a target="_blank" href="https://www.linkedin.com/in/cihat-%C3%B6nc%C3%BC/"> <li>
          {" "}
          <BsLinkedin />
        </li></a>
        |||{" "}
        <a target="_blank" href="https://twitter.com/0Cihat0"> <li>
          <BsTwitter />
        </li></a>
      </section>
    </>
  );
}

export default App;
