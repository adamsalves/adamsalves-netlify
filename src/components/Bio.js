import React from 'react'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

// utils
import { rhythm } from '../utils/typography'
import styled from 'styled-components'
import profilePic from './profile-pic.jpg'

// css
const BioWrapper = styled.div`
  display: flex;
  margin-bottom: ${rhythm(.5)};
`

const BioImage = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${rhythm(3)};
  height: ${rhythm(3)};
  border-radius: ${rhythm(50)};
`

class Bio extends React.Component {
  render() {
    return (
      <BioWrapper>
        <BioImage
          src={profilePic}
          alt={`Adams Alves - Front-End em São Paulo`}
        />
        <p>
        Trabalho com <strong>Desenvolvimento Web</strong> com foco em <strong>Front-End</strong>.
        Já atuei como freelancer na criação de sites institucionais e projetos que usavam <strong>Wordpress</strong>. 
        Atualmente quero trabalhar com Front-end, <strong>React</strong> ou frameworks semelhantes e <strong>UI Design</strong>.{' '}
          <br></br>
          Entre em contato comigo pelo e-mail:{' '} 
          <a href="mailto:contato@adamsalves.com.br">
            contato@adamsalves.com.br
          </a>
        </p>
      </BioWrapper>
    )
  }
}

export default Bio
