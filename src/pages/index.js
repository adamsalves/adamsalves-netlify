import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
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
          title={siteTitle + ' - Web Designer Freelancer em São Paulo / SP'}
        />
        <Bio />
        <h2
          style={{
            borderTop: '1px solid #eee',
            paddingTop: '15px'
          }}
        >
          Últimos Posts
        </h2>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const tags = get(node, 'frontmatter.tags')
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>{' '}
              {tags.map((tag, index) => {
                return (
                  <code 
                    className='language-text' 
                    key={index}
                    style={{
                        marginRight: '5px',
                        padding: '2px',
                        fontSize: '12px'  
                      }}  
                  >
                    {tag}
                  </code>
                )
              })}
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
