import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About Me</h1>
          {/*<p>
            Hace más de 10 años que me dedico a dar soluciones efectivas en
            seguridad electrónica e informática en general.{' '}
  </p>*/}
          <p>
            I have been working in IT and I-Security for more than 10 years.
          </p>
          <p>
            I find quite challenging to learn about new technologies and apply them
            in my job. This allows me to provide technological services to a
            wide range of companies and customers. I achieve high quality
            standards and approval.
          </p>
          {/*<p>
            {' '}
            En lo personal, me encanta aprender sobre nuevas tecnologías e
            implementarlas en mi ámbito laboral, lo que me ha permitido a través
            de los años, poder brindarle servicios a numerosas empresas y
            usuarios finales, logrando un alto nivel de calidad y conformidad.{' '}
</p>*/}
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJs} color="#FFF" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
