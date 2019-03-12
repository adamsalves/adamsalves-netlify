import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'

// Components
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

// css
const MainTags = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(33)};
  padding: ${rhythm(.8)} ${rhythm(1)};
`

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title, description },
    },
  }, location
}) => (
  <Layout location={location} title={title}>
    <Helmet 
      htmlAttributes={{ lang: 'pt-br' }}
      meta={[
        { name: 'author', content: 'Adams Alves' },
        { name: 'description', content: description },
        { name: 'keywords', content: 'Desenvolvimento Web, Front End, Wordpress, Sites Responsivos em São Paulo' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Adams Alves - Desenvolvimento Web e Front-End em São Paulo / SP' },
        { property: 'og:description', content: 'Adams Alves - Desenvolvimento Web, Sites Responsivos, Front End e Wordpress em São Paulo/SP.' },
        { property: 'og:url', content: 'https://adamsalves.com.br' },
      ]}
      title={`Tags | ${title} - Desenvolvimento Web e Front-End em São Paulo / SP`} 
    />
    <section>
      <MainTags>
        <h1>Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </MainTags>
    </section>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`