import React, { Component } from 'react'
import { rhythm } from '../utils/typography'
import { Link } from 'gatsby'

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginTop: rhythm(1.5),
          justifyContent: 'space-between',
          alignItems: 'center'
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
          <p>Adams Alves - 2018</p>
        </Link>
        <a href="https://www.netlify.com">
          <img src="https://www.netlify.com/img/global/badges/netlify-light.svg"/>
        </a>
      </div>
    )
  }
}

export default Footer