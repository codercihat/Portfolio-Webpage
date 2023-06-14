import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Projects(){
    return( <>
    {/* <ul>
        <Link to="/about">
          <li>About</li>{" "}
        </Link>
        <Link to="./projects">
          <li>Projects</li>
        </Link>
      </ul> */}
        <section className="main-content">
        {/* <div className="photo"></div> */}
        <div className="flex-text">
          {/* <h1>Hello I am Cihat,from Turkey ney ney</h1>  */}
  
          <h1 className="animated-welcome">Test your The World Cup 2022 knowledge</h1>
          <a target="_blank" href="https://fifa-2022-world-cup-quiz.vercel.app/"> <p>Start Quiz</p></a>
          <h1 className="animated-welcome">Wacth my JavaScript algorihtm Solving</h1>
          <a target="_blank" href="https://fifa-2022-world-cup-quiz.vercel.app/"> <p>Youtube</p></a>
        
         
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