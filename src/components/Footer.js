import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'

// utils
import { rhythm } from '../utils/typography'
import { Link } from 'gatsby'
import styled from 'styled-components'
import twitter from './twitter-brands.svg'
import github from './github-brands.svg'
import instagram from './instagram-brands.svg'
import facebook from './facebook-square-brands.svg'
import linkedin from './linkedin-brands.svg'
import dribbble from './dribbble-square-brands.svg'
import codepen from './codepen-brands.svg'

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
  padding: ${rhythm(.8)} ${rhythm(1)};
  @media (max-width: 620px) {
    flex-direction: column;
    align-items: flex-start;
    align-content: space-between;
    min-height: 50vw;
  }
`
const FooterLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`
const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
`

const FooterImage = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${rhythm(1)};
  height: ${rhythm(1)};
`

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterLink to={'/'}>
          {this.props.site.siteMetadata.title} - {new Date().getFullYear()}
        </FooterLink>
        <FooterNav>
          <a href="https://twitter.com/adams_alves/">
            <FooterImage 
              src={twitter}
            />
          </a>
          <a href="https://github.com/adamsalves/">
            <FooterImage
              src={github}
            />
          </a>
          <a href="https://instagram.com/adamsalves.dev/">
            <FooterImage
              src={instagram}
            />
          </a>
          <a href="https://facebook.com/adamsalves.webdesigner/">
            <FooterImage
              src={facebook}
            />
          </a>
          <a href="https://linkedin.com/in/adams-alves/">
            <FooterImage
              src={linkedin}
            />
          </a>
          <a href="https://dribbble.com/adamsalves/">
            <FooterImage
              src={dribbble}
            />
          </a>
          <a href="https://codepen.io/adams_alves/">
            <FooterImage
              src={codepen}
            />
          </a>
        </FooterNav>
        <a href="https://www.netlify.com">
          <img src="https://www.netlify.com/img/global/badges/netlify-light.svg"/>
        </a>
      </FooterWrapper>
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
          }
        }
      }
    `}
    render={(data) => (
      <Footer site={data.site} />
    )}
  />
)