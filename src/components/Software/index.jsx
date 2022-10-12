
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Loader from 'react-loaders'
import { faGithub, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import coin from '../../assets/images/ring.png'
import soft1 from '../../assets/images/soft1.png'
import bgSoft1 from '../../assets/images/6.svg'


const Software = () => {
  return (
    <>
      <div className="container software-page">
        <div className="text-zone">
          <h1>Software tools</h1>
          <ul>
            <li className="coin">
              <img src={coin} alt="" />
            </li>
            <li className="coin2">
              <img src={coin} alt="" />
            </li>
            <li className="coin3">
              <img src={coin} alt="" />
            </li>
          </ul>
          <ul className='list-tools'>
            <li> <FontAwesomeIcon icon={faNode} /></li>
            <li> <FontAwesomeIcon icon={faJsSquare} /></li>
            <li> <FontAwesomeIcon icon={faReact} /></li>
            <li> <FontAwesomeIcon icon={faGithub} /></li>
            <li> <FontAwesomeIcon icon={faHtml5} /></li>
          </ul>

        </div>

        <div className="works">
          <div className="worksright">
        
          </div>
        </div>
      </div>

      <Loader type="pacman" />

      <img src={bgSoft1} alt="" className="bgSoft1" />
     
      
    </>
  )
}

export default Software
