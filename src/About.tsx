import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function About(){
    return(
      <>
     {/*  <ul>
        <Link to="/about">
          <li>About</li>{" "}
        </Link>
        <Link to="./projects">
          <li>Projects</li>
        </Link>
      </ul> */}
    <section className="main-content">
      
      <div className="flex-text">
        

        <h1 className="animated-welcome">I am  Cihat from Turkey</h1>
        <p>I am a talented Front End React Developer wiht a year of experince</p>
        <p>I develop websites with an impressive and pure design</p>
        <p>I am highly motivated and i love my job</p>
        <p>If you want to learn more about me check out my projects</p>
        <p>I am open for contributions, do not hesitate to contact with me</p>
      </div>
    </section>
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

    )
}