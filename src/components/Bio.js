import React from 'react'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import twitter from './twitter-brands.svg'
import github from './github-brands.svg'
import instagram from './instagram-brands.svg'
import facebook from './facebook-square-brands.svg'
import linkedin from './linkedin-brands.svg'
import dribbble from './dribbble-square-brands.svg'
import codepen from './codepen-brands.svg'
import { rhythm } from '../utils/typography'


class Bio extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            marginBottom: rhythm(.5),
          }}
        >
          <img
            src={profilePic}
            alt={`Adams Alves - Front-End em São Paulo`}
            style={{
              marginRight: rhythm(1.5),
              marginBottom: 0,
              width: rhythm(3),
              height: rhythm(3),
              borderRadius: rhythm(50)
            }}
          />
          <p>
          Sou um <strong>Web Designer</strong> e desenvolvedor <strong>Front-End</strong>.
          Já atuei como freelancer na criação de sites institucionais e projetos que usavam <strong>Wordpress</strong>. 
          Atualmente quero trabalhar com Front-end, <strong>React</strong> ou frameworks semelhantes e <strong>UI Design</strong>.{' '}
            <br></br>
            Entre em contato comigo pelo e-mail:{' '} 
            <a href="mailto:contato@adamsalves.com.br">
              contato@adamsalves.com.br
            </a>
          </p>
        </div>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: rhythm(1),
          }}
        >
          <a href="https://twitter.com/adams_alves/">
            <img 
              src={twitter}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(1),
                height: rhythm(1),
              }} 
            />
          </a>
          <a href="https://github.com/adamsalves/">
            <img 
              src={github}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(1),
                height: rhythm(1)
              }} 
            />
          </a>
          <a href="https://instagram.com/adamsalves.wd/">
            <img 
              src={instagram}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(1),
                height: rhythm(1)
              }} 
            />
          </a>
          <a href="https://facebook.com/adamsalves.webdesigner/">
            <img 
              src={facebook}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(1),
                height: rhythm(1)
              }} 
            />
          </a>
          <a href="https://linkedin.com/in/adams-alves/">
            <img 
              src={linkedin}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(1),
                height: rhythm(1)
              }} 
            />
          </a>
          <a href="https://dribbble.com/adamsalves/">
            <img 
              src={dribbble}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(1),
                height: rhythm(1)
              }} 
            />
          </a>
          <a href="https://codepen.io/adams_alves/">
            <img 
              src={codepen}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(1),
                height: rhythm(1)
              }} 
            />
          </a>
        </nav>
      </div>
    )
  }
}

export default Bio
