import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

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

const BioLegend = styled.div`
  margin-bottom: ${rhythm(.5)};
`

const BioParagraph = styled.p`
  margin-bottom: 0;
`

class Bio extends React.Component {
  render() {
    return (
      <BioWrapper>
        <BioImage
          src={profilePic}
          alt={this.props.site.siteMetadata.description}
        />
        <BioLegend>
          <BioParagraph dangerouslySetInnerHTML={{ __html: this.props.site.siteMetadata.bio }} />
          <BioParagraph>
            Se gostar do conteúdo, me apoie no <a href="https://ko-fi.com/adamsalves">Ko-fi</a> :)
          </BioParagraph>
          <BioParagraph>
            Entre em contato comigo pelo e-mail:{' '} 
            <a href="mailto:contato@adamsalves.com.br">
              contato@adamsalves.com.br
            </a>
          </BioParagraph>
        </BioLegend> 
      </BioWrapper>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            bio
          }
        }
      }
    `}
    render={(data) => (
      <Bio site={data.site} />
    )}
  />
)
