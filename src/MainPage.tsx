import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <ul>
        <Link to="/about">
          <li>About</li>{" "}
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
      </ul>
        
      

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
      <Outlet />
    </>
    
  );
}
