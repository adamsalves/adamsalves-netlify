import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import Footer from './Footer'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <header>
          <h1
            style={{
              ...scale(.6),
              marginTop: 0,
              marginBottom: rhythm(1)
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              {title}
            </Link>
          </h1>
          {/* <nav>
              <ul>
                <li>Home</li>
                <li>Blog</li>
              </ul>
          </nav>  */}
        </header>
      )
    } else {
      header = (
        <header>
          <h3
            style={{
              ...scale(.6),
              fontFamily: 'Libre Franklin, sans-serif',
              marginTop: 0,
              marginBottom: rhythm(1)
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              {title}
            </Link>
          </h3>
        </header>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(.8)} ${rhythm(1)}`,
        }}
        >
        {header}
        {children}
        <Footer></Footer>
      </div>
    )
  }
}

export default Layout
