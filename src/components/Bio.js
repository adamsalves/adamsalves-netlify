import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Adams Alves - Front-End em São Paulo`}
          style={{
            marginRight: rhythm(1 / 2),
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
    )
  }
}

export default Bio
