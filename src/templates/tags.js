import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'

// utils
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

// css

const MainTags = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(33)};
  padding: ${rhythm(.8)} ${rhythm(1)};
`

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } com a tag '${tag}'`
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description

  return (
    <Layout location={location} title={siteTitle} >
      <Helmet 
        htmlAttributes={{ lang: 'pt-br' }}
        meta={[
          { name: 'author', content: 'Adams Alves' },
          { name: 'description', content: siteDescription },
          { name: 'keywords', content: 'Web Designer Freelancer, Design, Desenvolvimento Web, Front End, Wordpress, Sites Responsivos, Web Designer Freelancer em São Paulo' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Adams Alves - Web Designer Freelancer em São Paulo / SP' },
          { property: 'og:description', content: 'Adams Alves - Web Designer Freelancer com foco em Desenvolvimento Web, Sites Responsivos, Front End e Wordpress em São Paulo/SP.' },
          { property: 'og:url', content: 'https://adamsalves.com.br' },
        ]}
        title={`Tag: ${tag} | ${siteTitle} - Web Designer Freelancer em São Paulo / SP`} 
      />
      <section>
        <MainTags>
          <h1>{tagHeader}</h1>
          <ul>
            {edges.map(({ node }) => {
              const { title } = node.frontmatter
              return (
                <li key={node.fields.slug}>
                  <Link to={node.fields.slug}>{title}</Link>
                </li>
              )
            })}
          </ul>
          {/*
            This links to a page that does not yet exist.
            We'll come back to it!
          */}
          <Link to='/tags'>Todas as Tags</Link>
        </MainTags>
      </section>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`