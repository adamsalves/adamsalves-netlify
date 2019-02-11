import React from 'react'
import { Link } from 'gatsby'

// component
import Footer from './Footer'

// utils
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'
import profilePic from './profile-pic.jpg'

// css
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
  padding: ${rhythm(.8)} ${rhythm(1)};
`
const HeaderH1 = styled.h1`
  ${scale(.6)};
  margin-top: 0;
  margin-bottom: 0;
`
const HeaderH3 = styled.h3`
  ${scale(.6)};
  font-family: 'Libre Franklin', sans-serif;
  margin-top: 0;
  margin-bottom: 0;
`
const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration: none;
  }
`
const NavImage = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${rhythm(1.5)};
  height: ${rhythm(1.5)};
  border-radius: ${rhythm(50)};    
`
const SectionHeader = styled.section`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  z-index: 1;
  position: relative;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    
    if (location.pathname === rootPath) {
      header = (
        <Header>
          <HeaderH1>
            <HeaderLink
              to={'/'}
            >
              {title}
            </HeaderLink>
          </HeaderH1>
          <nav>
            <NavImage
              src={profilePic}
              alt={`Adams Alves - Front-End em São Paulo`}
              title={`Sou um Web Designer e desenvolvedor Front-End. Já atuei como freelancer na criação de sites institucionais e projetos que usavam Wordpress. Atualmente quero trabalhar com Front-end, React ou frameworks semelhantes e UI Design`}
            />
          </nav>
        </Header>
      )
    } else {
      header = (
        <Header>
          <HeaderH3>
            <HeaderLink
              to={'/'}
            >
              {title}
            </HeaderLink>
          </HeaderH3>
          <nav>
            <NavImage
              src={profilePic}
              alt={`Adams Alves - Front-End em São Paulo`}
              title={`Sou um Web Designer e desenvolvedor Front-End. Já atuei como freelancer na criação de sites institucionais e projetos que usavam Wordpress. Atualmente quero trabalhar com Front-end, React ou frameworks semelhantes e UI Design`}
            />
          </nav>
        </Header>
      )
    }
    return (
      <div className="app">
        <SectionHeader>
          {header}
        </SectionHeader>
        {children}
        <Footer></Footer>
      </div>
    )
  }
}

export default Layout
