
import Loader from 'react-loaders'

import invasion from '../../assets/images/aliencontact.svg'
import './index.scss'
import 'animate.css';


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
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
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
