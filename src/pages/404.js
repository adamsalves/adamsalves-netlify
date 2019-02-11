import React from 'react'
import { Link, graphql } from 'gatsby'

// utils
import { rhythm } from '../utils/typography'
import styled from 'styled-components'
import get from 'lodash/get'

//component
import Layout from '../components/Layout'

const MainNotFound = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(33)};
  padding: ${rhythm(.8)} ${rhythm(1)};
`

class NotFoundPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      // fazer a query para a prop 'title'
      <Layout location={this.props.location} title={siteTitle}> 
        <section>
          <MainNotFound>
            <h1>Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <p>
              Go back to the <Link to={'/'}>Home</Link>
            </p>
          </MainNotFound>
        </section>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`