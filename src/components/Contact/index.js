
import Loader from 'react-loaders'
import './index.scss'
import 'animate.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import React from 'react'
import Aliens from './Aliens';
const Contact = () => {



  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
           Contact Me
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>

          <div className='listContact'>
            <ul className='ulContact'>
              <li  className='liContact'> 
              <FontAwesomeIcon icon={faWhatsapp} color="#fff" />Whatsapp
              </li>
              <li>
                
              </li>
              <li className='liContact'>
              <FontAwesomeIcon icon={faLinkedin} color="#fff" />Linkedin
              </li>
            </ul>
          </div>
          
        </div>
        <div className='aliensright'>
        <Aliens />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
