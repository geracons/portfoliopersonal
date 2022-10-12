import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Loader from 'react-loaders'
import {
  faGithub,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import heart from '../../assets/images/heart.png'
import arcade from '../../assets/images/arcade.svg'
import soft1 from '../../assets/images/soft1.png'
import bgHard1 from '../../assets/images/9.svg'

const Hardware = () => {
  return (
    <>
      <div className="container software-page">
        <div className="text-zone">
          <h1>Hardware tools</h1>{' '}
          <ul>
            <li className="heart">
              <img src={heart} alt="" />
            </li>
            <li className="heart2">
              <img src={heart} alt="" />
            </li>
            <li className="heart3">
              <img src={heart} alt="" />
            </li>
          </ul>
          <ul className="list-tools">
            <li>
              {' '}
              <FontAwesomeIcon icon={faNode} />
            </li>
            <li>
              {' '}
              <FontAwesomeIcon icon={faJsSquare} />
            </li>
            <li>
              {' '}
              <FontAwesomeIcon icon={faReact} />
            </li>
            <li>
              {' '}
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li>
              {' '}
              <FontAwesomeIcon icon={faHtml5} />
            </li>
          </ul>
        </div>
        <div className="works">
          <div className="worksright">
            
          </div>
        </div>
      </div>

      <img src={bgHard1} alt="" className="bgHard1" />
     
      <Loader type="pacman" />
    </>
  )
}

export default Hardware
