import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <header
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(34),
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
          }}
        >
          <h1
            style={{
              ...scale(.49),
              marginTop: 0,
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
        <header
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(34),
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
          }}
        >
          <h3
            style={{
              ...scale(.49),
              fontFamily: 'Libre Franklin, sans-serif',
              marginTop: 0,
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
      <div>
        {header}
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(28),
            padding: `${rhythm(0)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
        </div>
      </div>
    )
  }
}

export default Layout
